# Nom des conteneurs définis dans le docker-compose.yml
APP_CONTAINER = avataaars_gen

.PHONY: help build-lib rebuild-all clean-all restart-app

help: ## Affiche cette aide
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

build-lib: ## Compile la librairie avataaars
	@echo "--- Compilation de la librairie ---"
	docker run --rm -v "$(PWD)/avataaars:/app" -w /app node:18-alpine sh -c "npm install && npm run build"

rebuild-all: ## Nettoie tout, recompile la lib et relance les conteneurs
	@echo "--- Reconstruction complète ---"
	$(MAKE) clean-all
	$(MAKE) build-lib
	docker compose up -d --build

cleanall: ## Arrête et supprime les conteneurs et nettoie le cache
	@echo "--- Nettoyage total ---"
	docker compose down -v
	rm -rf avataaars-generator/node_modules/.cache
	# Optionnel : supprime aussi les node_modules locaux si besoin
	# rm -rf avataaars/node_modules

restapp: ## Redémarre l'application uniquement
	docker compose restart app