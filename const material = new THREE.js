  const material = new THREE.MeshStandardMaterial({color: 0x8b5cf6});
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  // Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5,5,5);
  scene.add(directionalLight);
  // Render loop
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
  // Animate scene rotation with GSAP
  gsap.fromTo(scene.rotation, 
    { y: -0.2 }, 
    { y: 0.2, repeat: -1, yoyo: true, ease: "power2.inOut", duration: 3 }
  );
  // Handle resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
</script>
</body>
</html>