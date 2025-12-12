import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import './App.css'

function App() {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const [isStarted, setIsStarted] = useState(false)
  const loaderRef = useRef(null)

  useEffect(() => {
    if (!isStarted) return

    // Detect mobile device - tính toán động
    const checkIsMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
             window.innerWidth <= 768
    }
    const isMobile = checkIsMobile()

    // ==========================================
    // 1. RESOURCES CONFIG Vandiep
    // ==========================================
    const MUSIC_URL = '/audio.mp3'
    let bgMusic = null
    const RESOURCES = {
      photos: ['/image1.jpeg', '/image2.jpeg', '/image3.jpeg', '/image4.jpeg', '/image5.jpeg']
    }

    const loader = loaderRef.current ?? new THREE.TextureLoader()
    loader.setCrossOrigin('anonymous')
    loaderRef.current = loader

    const photoTextures = RESOURCES.photos.map((file) => loader.load(file))
    bgMusic = new Audio(MUSIC_URL)
    bgMusic.loop = true
    bgMusic.volume = 0.9

    function createCustomTexture(type) {
      const canvas = document.createElement('canvas')
      canvas.width = 128
      canvas.height = 128
      const ctx = canvas.getContext('2d')
      const cx = 64, cy = 64

      if (type === 'gold_glow') {
        const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 40)
        grd.addColorStop(0, '#FFFFFF')
        grd.addColorStop(0.2, '#FFFFE0')
        grd.addColorStop(0.5, '#FFD700')
        grd.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = grd
        ctx.fillRect(0, 0, 128, 128)
      } else if (type === 'red_light') {
        const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 50)
        grd.addColorStop(0, '#FFAAAA')
        grd.addColorStop(0.3, '#FF0000')
        grd.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = grd
        ctx.fillRect(0, 0, 128, 128)
      } else if (type === 'gift_red') {
        ctx.fillStyle = '#D32F2F'
        ctx.fillRect(20, 20, 88, 88)
        ctx.fillStyle = '#FFD700'
        ctx.fillRect(54, 20, 20, 88)
        ctx.fillRect(20, 54, 88, 20)
        ctx.strokeStyle = "rgba(0,0,0,0.3)"
        ctx.lineWidth = 2
        ctx.strokeRect(20, 20, 88, 88)
      }
      return new THREE.CanvasTexture(canvas)
    }

    const textures = {
      gold: createCustomTexture('gold_glow'),
      red: createCustomTexture('red_light'),
      gift: createCustomTexture('gift_red')
    }

    // ==========================================
    // 2. SYSTEM CONFIG Vandiep - Responsive
    // ==========================================
    const getConfig = () => {
      const baseConfig = {
        goldCount: 2000,
        redCount: 300,
        giftCount: 150,
        explodeRadius: 65,
        photoOrbitRadius: 25,
        treeHeight: 70,
        treeBaseRadius: 35,
        titleSize: { width: 60, height: 15 },
        titleFont: 'bold italic 90px "Times New Roman"',
        loveSize: { width: 70, height: 18 },
        loveFont: 'bold 120px "Segoe UI", sans-serif',
        starSize: 12
      }

      if (isMobile) {
        const scale = window.innerWidth <= 480 ? 0.6 : 0.75
        return {
          goldCount: Math.floor(2000 * scale),
          redCount: Math.floor(300 * scale),
          giftCount: Math.floor(150 * scale),
          explodeRadius: 65 * scale,
          photoOrbitRadius: 25 * scale,
          treeHeight: 70 * scale,
          treeBaseRadius: 35 * scale,
          titleSize: { width: 60 * scale, height: 15 * scale },
          titleFont: window.innerWidth <= 480 
            ? 'bold italic 50px "Times New Roman"' 
            : 'bold italic 65px "Times New Roman"',
          loveSize: { width: 70 * scale, height: 18 * scale },
          loveFont: window.innerWidth <= 480
            ? 'bold 70px "Segoe UI", sans-serif'
            : 'bold 90px "Segoe UI", sans-serif',
          starSize: 12 * scale
        }
      }
      return baseConfig
    }

    const CONFIG = getConfig()

    let scene, camera, renderer
    let groupGold, groupRed, groupGift
    let photoMeshes = []
    let titleMesh, starMesh, loveMesh

    let state = 'TREE'
    let selectedIndex = 0
    let handX = 0.5

    // ==========================================
    // 3. THREE.JS SYSTEM Vandiep
    // ==========================================
    function init3D() {
      const container = containerRef.current
      scene = new THREE.Scene()
      scene.fog = new THREE.FogExp2(0x000000, 0.002)

      // Responsive camera FOV
      const fov = isMobile ? 70 : 60
      camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 0.1, 1000)
      camera.position.z = 100

      // Optimize renderer for mobile
      const pixelRatio = isMobile 
        ? Math.min(window.devicePixelRatio, 1.2) 
        : Math.min(window.devicePixelRatio, 2)
      
      renderer = new THREE.WebGLRenderer({ 
        antialias: !isMobile, // Disable antialiasing on mobile for performance
        alpha: false,
        powerPreference: isMobile ? 'low-power' : 'high-performance'
      })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(pixelRatio)
      container.appendChild(renderer.domElement)

      groupGold = createParticleSystem('gold', CONFIG.goldCount, 2.0)
      groupRed = createParticleSystem('red', CONFIG.redCount, 3.5)
      groupGift = createParticleSystem('gift', CONFIG.giftCount, 3.0)

      createPhotos()
      createDecorations()
      animate()
    }

    function createParticleSystem(type, count, size) {
      const pPositions = []
      const pExplodeTargets = []
      const pTreeTargets = []
      const pHeartTargets = []
      const sizes = []
      const phases = []

      for (let i = 0; i < count; i++) {
        // --- TREE Vandiep ---
        const h = Math.random() * CONFIG.treeHeight
        const y = h - CONFIG.treeHeight / 2
        let radiusRatio = (type === 'gold') ? Math.sqrt(Math.random()) : 0.9 + Math.random() * 0.1
        const maxR = (1 - (h / CONFIG.treeHeight)) * CONFIG.treeBaseRadius
        const r = maxR * radiusRatio
        const theta = Math.random() * Math.PI * 2
        pTreeTargets.push(r * Math.cos(theta), y, r * Math.sin(theta))

        // --- EXPLODE Vandiep ---
        const u = Math.random()
        const v = Math.random()
        const phi = Math.acos(2 * v - 1)
        const lam = 2 * Math.PI * u
        let radMult = (type === 'gift') ? 1.2 : 1.0
        const rad = CONFIG.explodeRadius * Math.cbrt(Math.random()) * radMult
        pExplodeTargets.push(
          rad * Math.sin(phi) * Math.cos(lam),
          rad * Math.sin(phi) * Math.sin(lam),
          rad * Math.cos(phi)
        )

        // --- SOFT HEART Vandiep ---
        const tHeart = Math.random() * Math.PI * 2
        let hx = 16 * Math.pow(Math.sin(tHeart), 3)
        let hy = 13 * Math.cos(tHeart) - 5 * Math.cos(2 * tHeart) - 2 * Math.cos(3 * tHeart) - Math.cos(4 * tHeart)

        const rFill = Math.pow(Math.random(), 0.3) // Soft fill Vandiep
        hx *= rFill
        hy *= rFill
        let hz = (Math.random() - 0.5) * 8 * rFill

        const noise = 1.0
        hx += (Math.random() - 0.5) * noise
        hy += (Math.random() - 0.5) * noise
        hz += (Math.random() - 0.5) * noise

        const scaleH = 2.2
        pHeartTargets.push(hx * scaleH, hy * scaleH + 5, hz)

        // --- INIT Vandiep ---
        pPositions.push(pTreeTargets[i * 3], pTreeTargets[i * 3 + 1], pTreeTargets[i * 3 + 2])
        sizes.push(size)
        phases.push(Math.random() * Math.PI * 2)
      }

      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.Float32BufferAttribute(pPositions, 3))
      geo.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1))

      // Init colors Vandiep
      const colors = new Float32Array(count * 3)
      const baseColor = new THREE.Color()
      if (type === 'gold') baseColor.setHex(0xFFD700)
      else if (type === 'red') baseColor.setHex(0xFF0000)
      else baseColor.setHex(0xFFFFFF)

      for (let i = 0; i < count; i++) {
        colors[i * 3] = baseColor.r
        colors[i * 3 + 1] = baseColor.g
        colors[i * 3 + 2] = baseColor.b
      }
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

      geo.userData = {
        tree: pTreeTargets,
        explode: pExplodeTargets,
        heart: pHeartTargets,
        phases: phases,
        baseColor: baseColor,
        baseSize: size
      }

      const mat = new THREE.PointsMaterial({
        size: size,
        map: textures[type],
        transparent: true,
        opacity: 1.0,
        vertexColors: true,
        blending: (type === 'gift') ? THREE.NormalBlending : THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true
      })

      const points = new THREE.Points(geo, mat)
      scene.add(points)
      return points
    }

    function createPhotos() {
      const geo = new THREE.PlaneGeometry(8, 8)
      const borderGeo = new THREE.PlaneGeometry(9, 9)
      const borderMat = new THREE.MeshBasicMaterial({ color: 0xFFD700 })

      RESOURCES.photos.forEach((_, i) => {
        const mat = new THREE.MeshBasicMaterial({
          map: photoTextures[i],
          side: THREE.DoubleSide,
          transparent: true
        })
        const mesh = new THREE.Mesh(geo, mat)
        const border = new THREE.Mesh(borderGeo, borderMat)
        border.position.z = -0.1
        mesh.add(border)
        mesh.visible = false
        mesh.scale.set(0, 0, 0)
        scene.add(mesh)
        photoMeshes.push(mesh)
      })
    }

    function createDecorations() {
      // MERRY CHRISTMAS Vandiep - Responsive
      const canvas = document.createElement('canvas')
      const canvasWidth = isMobile ? 512 : 1024
      const canvasHeight = isMobile ? 128 : 256
      canvas.width = canvasWidth
      canvas.height = canvasHeight
      const ctx = canvas.getContext('2d')
      ctx.font = CONFIG.titleFont
      ctx.fillStyle = '#FFD700'
      ctx.textAlign = 'center'
      ctx.shadowColor = "#FF0000"
      ctx.shadowBlur = isMobile ? 20 : 40
      ctx.fillText("MERRY CHRISTMAS", canvasWidth / 2, canvasHeight * 0.5)
      const tex = new THREE.CanvasTexture(canvas)
      const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, blending: THREE.AdditiveBlending })
      titleMesh = new THREE.Mesh(new THREE.PlaneGeometry(CONFIG.titleSize.width, CONFIG.titleSize.height), mat)
      titleMesh.position.set(0, isMobile ? 40 : 50, 0)
      scene.add(titleMesh)

      // STAR Vandiep
      const starCanvas = document.createElement('canvas')
      starCanvas.width = 128
      starCanvas.height = 128
      const sCtx = starCanvas.getContext('2d')
      sCtx.fillStyle = "#FFFF00"
      sCtx.shadowColor = "#FFF"
      sCtx.shadowBlur = 20
      sCtx.beginPath()
      const cx = 64, cy = 64, outer = 50, inner = 20
      for (let i = 0; i < 5; i++) {
        sCtx.lineTo(
          cx + Math.cos((18 + i * 72) / 180 * Math.PI) * outer,
          cy - Math.sin((18 + i * 72) / 180 * Math.PI) * outer
        )
        sCtx.lineTo(
          cx + Math.cos((54 + i * 72) / 180 * Math.PI) * inner,
          cy - Math.sin((54 + i * 72) / 180 * Math.PI) * inner
        )
      }
      sCtx.closePath()
      sCtx.fill()
      const starTex = new THREE.CanvasTexture(starCanvas)
      const starMat = new THREE.MeshBasicMaterial({ map: starTex, transparent: true, blending: THREE.AdditiveBlending })
      starMesh = new THREE.Mesh(new THREE.PlaneGeometry(CONFIG.starSize, CONFIG.starSize), starMat)
      starMesh.position.set(0, CONFIG.treeHeight / 2 + 2, 0)
      scene.add(starMesh)

      // I LOVE YOU TEXT Vandiep - Responsive
      const loveCanvas = document.createElement('canvas')
      const loveCanvasWidth = isMobile ? 512 : 1024
      const loveCanvasHeight = isMobile ? 128 : 256
      loveCanvas.width = loveCanvasWidth
      loveCanvas.height = loveCanvasHeight
      const lCtx = loveCanvas.getContext('2d')
      lCtx.font = CONFIG.loveFont
      lCtx.fillStyle = '#FF69B4'
      lCtx.textAlign = 'center'
      lCtx.shadowColor = "#FF1493"
      lCtx.shadowBlur = isMobile ? 20 : 40
      lCtx.fillText("I LOVE YOU ❤️", loveCanvasWidth / 2, loveCanvasHeight * 0.5)
      const loveTex = new THREE.CanvasTexture(loveCanvas)
      const loveMat = new THREE.MeshBasicMaterial({ map: loveTex, transparent: true, blending: THREE.AdditiveBlending })
      loveMesh = new THREE.Mesh(new THREE.PlaneGeometry(CONFIG.loveSize.width, CONFIG.loveSize.height), loveMat)
      loveMesh.position.set(0, 0, 20)
      loveMesh.visible = false
      scene.add(loveMesh)
    }

    function updateParticleGroup(group, type, targetState, speed, handRotY, time) {
      const positions = group.geometry.attributes.position.array
      const sizes = group.geometry.attributes.size.array
      const colors = group.geometry.attributes.color.array
      const phases = group.geometry.userData.phases
      const baseColor = group.geometry.userData.baseColor
      const baseSize = group.geometry.userData.baseSize

      const targetKey = (targetState === 'TREE') ? 'tree' : (targetState === 'HEART' ? 'heart' : 'explode')
      const targets = group.geometry.userData[(targetState === 'PHOTO') ? 'explode' : targetKey]

      // 1. Vandiep
      for (let i = 0; i < positions.length; i++) {
        positions[i] += (targets[i] - positions[i]) * speed
      }
      group.geometry.attributes.position.needsUpdate = true

      // 2. COLOR & SIZE Vandiep
      const count = positions.length / 3

      if (targetState === 'TREE') {
        group.rotation.y += 0.003

        for (let i = 0; i < count; i++) {
          sizes[i] = baseSize
          let brightness = 1.0
          if (type === 'red') {
            // RED
            brightness = 0.5 + 0.5 * Math.sin(time * 3 + phases[i])
          } else if (type === 'gold') {
            // YELLOW
            brightness = 0.8 + 0.4 * Math.sin(time * 10 + phases[i])
          }
          colors[i * 3] = baseColor.r * brightness
          colors[i * 3 + 1] = baseColor.g * brightness
          colors[i * 3 + 2] = baseColor.b * brightness
        }
        group.geometry.attributes.color.needsUpdate = true
        group.geometry.attributes.size.needsUpdate = true
      } else if (targetState === 'HEART') {
        group.rotation.y = 0
        const beatScale = 1 + Math.abs(Math.sin(time * 3)) * 0.15
        group.scale.set(beatScale, beatScale, beatScale)

        // Vandiep
        for (let i = 0; i < count; i++) {
          colors[i * 3] = baseColor.r
          colors[i * 3 + 1] = baseColor.g
          colors[i * 3 + 2] = baseColor.b
          if (i % 3 === 0) sizes[i] = baseSize
          else sizes[i] = 0
        }
        group.geometry.attributes.color.needsUpdate = true
        group.geometry.attributes.size.needsUpdate = true
      } else {
        // EXPLODE
        group.scale.set(1, 1, 1)
        group.rotation.y += (handRotY - group.rotation.y) * 0.1

        // size, color
        for (let i = 0; i < count; i++) {
          sizes[i] = baseSize
          let brightness = 1.0
          if (type === 'gold' || type === 'red') {
            brightness = 0.8 + 0.5 * Math.sin(time * 12 + phases[i])
          }
          colors[i * 3] = baseColor.r * brightness
          colors[i * 3 + 1] = baseColor.g * brightness
          colors[i * 3 + 2] = baseColor.b * brightness
        }
        group.geometry.attributes.size.needsUpdate = true
        group.geometry.attributes.color.needsUpdate = true
      }
    }

    let animationId = null
    function animate() {
      animationId = requestAnimationFrame(animate)
      const time = Date.now() * 0.001
      const speed = 0.08
      const handRotY = (handX - 0.5) * 4.0

      updateParticleGroup(groupGold, 'gold', state, speed, handRotY, time)
      updateParticleGroup(groupRed, 'red', state, speed, handRotY, time)
      updateParticleGroup(groupGift, 'gift', state, speed, handRotY, time)

      photoMeshes.forEach((mesh, i) => {
        if (!mesh.material.map && photoTextures[i]) {
          mesh.material.map = photoTextures[i]
          mesh.material.needsUpdate = true
        }
      })

      if (state === 'TREE') {
        titleMesh.visible = true
        starMesh.visible = true
        loveMesh.visible = false
        titleMesh.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1)
        starMesh.rotation.z -= 0.02
        starMesh.material.opacity = 0.7 + 0.3 * Math.sin(time * 5)
        photoMeshes.forEach(m => {
          m.scale.lerp(new THREE.Vector3(0, 0, 0), 0.1)
          m.visible = false
        })
      } else if (state === 'HEART') {
        titleMesh.visible = false
        starMesh.visible = false
        loveMesh.visible = true
        photoMeshes.forEach(m => { m.visible = false })
        const s = 1 + Math.abs(Math.sin(time * 3)) * 0.1
        loveMesh.scale.set(s, s, 1)
      } else if (state === 'EXPLODE') {
        titleMesh.visible = false
        starMesh.visible = false
        loveMesh.visible = false
        const baseAngle = groupGold.rotation.y
        const angleStep = (Math.PI * 2) / 5
        let bestIdx = 0
        let maxZ = -999
        photoMeshes.forEach((mesh, i) => {
          mesh.visible = true
          const angle = baseAngle + i * angleStep
          const x = Math.sin(angle) * CONFIG.photoOrbitRadius
          const z = Math.cos(angle) * CONFIG.photoOrbitRadius
          const y = Math.sin(time + i) * 3
          mesh.position.lerp(new THREE.Vector3(x, y, z), 0.1)
          mesh.lookAt(camera.position)
          if (z > maxZ) {
            maxZ = z
            bestIdx = i
          }
          if (z > 5) {
            const ds = 1.0 + (z / CONFIG.photoOrbitRadius) * 0.8
            mesh.scale.lerp(new THREE.Vector3(ds, ds, ds), 0.1)
          } else {
            mesh.scale.lerp(new THREE.Vector3(0.6, 0.6, 0.6), 0.1)
          }
        })
        selectedIndex = bestIdx
      } else if (state === 'PHOTO') {
        loveMesh.visible = false
        const photoScale = isMobile ? 3.5 : 5
        const photoZ = isMobile ? 50 : 60
        photoMeshes.forEach((mesh, i) => {
          if (i === selectedIndex) {
            mesh.position.lerp(new THREE.Vector3(0, 0, photoZ), 0.1)
            mesh.scale.lerp(new THREE.Vector3(photoScale, photoScale, photoScale), 0.1)
            mesh.lookAt(camera.position)
            mesh.rotation.z = 0
          } else {
            mesh.scale.lerp(new THREE.Vector3(0, 0, 0), 0.1)
          }
        })
      }
      renderer.render(scene, camera)
    }

    function startSystem() {
      // Play background music (requires user interaction already occurred)
      bgMusic.play().catch(() => {})
      init3D()

      const video = videoRef.current
      const canvas = canvasRef.current
      if (video) {
        video.setAttribute('playsinline', 'true')
        video.setAttribute('autoplay', 'true')
        video.muted = true
      }
      if (canvas) {
        // Responsive canvas preview size
        const previewScale = isMobile ? 0.6 : 1
        canvas.width = 100 * previewScale
        canvas.height = 75 * previewScale
      }
      const ctx = canvas?.getContext('2d')

      // Load MediaPipe Hands from CDN - Load theo thứ tự
      const loadScript = (src) => {
        return new Promise((resolve, reject) => {
          if (document.querySelector(`script[src="${src}"]`)) {
            resolve()
            return
          }
          const script = document.createElement('script')
          script.src = src
          script.crossOrigin = 'anonymous'
          script.onload = resolve
          script.onerror = reject
          document.head.appendChild(script)
        })
      }

      Promise.all([
        loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js'),
        loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/control_utils/control_utils.js'),
        loadScript('https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js')
      ]).then(() => {
        if (typeof Hands === 'undefined' || typeof Camera === 'undefined') {
          console.error('MediaPipe không được load đúng cách')
          return
        }

        const hands = new Hands({
          locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
        })
        hands.setOptions({
          maxNumHands: 2,
          modelComplexity: 1,
          minDetectionConfidence: 0.5,
          minTrackingConfidence: 0.5,
          selfieMode: true
        })

        hands.onResults(results => {
          if (ctx && canvas) {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height)
          }

          // --- Hand Logic  ---
          if (results.multiHandLandmarks.length === 2) {
            const h1 = results.multiHandLandmarks[0]
            const h2 = results.multiHandLandmarks[1]
            const distIndex = Math.hypot(h1[8].x - h2[8].x, h1[8].y - h2[8].y)
            const distThumb = Math.hypot(h1[4].x - h2[4].x, h1[4].y - h2[4].y)
            if (distIndex < 0.15 && distThumb < 0.15) {
              state = 'HEART'
              return
            }
          }

          if (results.multiHandLandmarks.length > 0) {
            const lm = results.multiHandLandmarks[0]
            handX = lm[9].x
            const tips = [8, 12, 16, 20]
            const wrist = lm[0]
            let openDist = 0
            tips.forEach(i => openDist += Math.hypot(lm[i].x - wrist.x, lm[i].y - wrist.y))
            const avgDist = openDist / 4
            const pinchDist = Math.hypot(lm[4].x - lm[8].x, lm[4].y - lm[8].y)

            if (avgDist < 0.25) {
              state = 'TREE'
            } else if (pinchDist < 0.05) {
              state = 'PHOTO'
            } else {
              state = 'EXPLODE'
            }
          } else {
            state = 'TREE'
          }
        })

        // Responsive camera settings for mobile
        const cameraWidth = isMobile ? 320 : 360
        const cameraHeight = isMobile ? 240 : 270
        
        const cameraUtils = new Camera(video, {
          onFrame: async () => {
            await hands.send({ image: video })
          },
          width: cameraWidth,
          height: cameraHeight,
          facingMode: 'user' // Front camera for mobile
        })
        try {
          cameraUtils.start()
        } catch (err) {
          console.error('Không thể khởi động camera:', err)
        }
      }).catch(err => {
        console.error('Lỗi khi load MediaPipe:', err)
      })
    }

    startSystem()

    function handleResize() {
      if (camera && renderer) {
        const newIsMobile = window.innerWidth <= 768
        const fov = newIsMobile ? 70 : 60
        camera.fov = fov
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
        
        // Update pixel ratio on resize
        const pixelRatio = newIsMobile 
          ? Math.min(window.devicePixelRatio, 1.2) 
          : Math.min(window.devicePixelRatio, 2)
        renderer.setPixelRatio(pixelRatio)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      if (renderer) {
        renderer.dispose()
      }
      if (bgMusic) {
        bgMusic.pause()
        bgMusic = null
      }
    }
  }, [isStarted])

  const handleStart = () => {
    setIsStarted(true)
  }

  return (
    <div className="app-container">
      <div id="error-log" style={{ display: 'none' }}></div>

      {/* UI Vandiep */}
      {!isStarted && (
        <div id="ui-layer">
          <div className="guide">
            🖐 <b>Open:</b> Explode &nbsp;|&nbsp; 🫶 <b>Heart:</b> Love &nbsp;|&nbsp; ✊ <b>Fist:</b> Tree
          </div>
          <button id="btnStart" onClick={handleStart}>
            START MAGIC
          </button>
        </div>
      )}

      {/* Vandiep */}
      <div id="copyright">© by vandiep</div>

      <div id="canvas-container" ref={containerRef}></div>
      <video className="input_video" ref={videoRef} style={{ display: 'none' }}></video>
      <canvas id="camera-preview" ref={canvasRef}></canvas>
    </div>
  )
}

export default App

