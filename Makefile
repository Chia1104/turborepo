init:
	@echo "Installing dependencies..."
	@pnpm install
	@echo "Installing dependencies... Done"
	@echo "Creating next .env file..."
	@cp ./apps/next/.env.example ./apps/www/.env
	@echo "Creating www .env file... Done"
	@echo "Creating db .env file..."
	@cp ./packages/db/.env.example ./packages/db/.env
	@echo "Creating db .env file... Done"
	@echo "Creating react .env file..."
	@cp ./apps/react/.env.example ./apps/react/.env
	@echo "Creating react .env file... Done"
