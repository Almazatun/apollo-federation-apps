install_gateway:
	@echo "Install Gateway service packages"
	cd gateway && yarn install
install_user:
	@echo "Install User service packages"
	cd user && yarn install
install_post:
	@echo "Install Post service packages"
	cd post && yarn install
install:
	@echo "Install Services packages"
	make install_gateway && make install_post && make install_user