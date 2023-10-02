install_gateway:
	@echo "Install gateway service packages"
	cd gateway && yarn install
install_user:
	@echo "Install user service packages"
	cd user && yarn install
install_post:
	@echo "Install post service packages"
	cd post && yarn install
install:
	@echo "Install services packages"
	make install_gateway && make install_post && make install_user
dev_gateway:
	@echo "Run gateway service"
	cd gateway && yarn start:dev
dev_user:
	@echo "Run user service"
	cd user && yarn start:dev
dev_post:
	@echo "Run post service"
	cd post && yarn start:dev