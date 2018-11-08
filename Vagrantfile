Vagrant.configure('2') do |config|
  config.vm.box = 'debian/stretch64'
  config.vm.provision :shell, path: 'install-docker.sh', run: 'always'
  config.vm.provision :shell, path: 'build-and-run-app.sh', run: 'always'
  config.vm.network "forwarded_port", guest: 8080, host: 8080
  config.vm.network "private_network", ip: "192.168.50.4"
end
