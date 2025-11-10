/**
 * Ficheiro de Configuração da API
 * 
 * Centraliza o URL base da API para facilitar a mudança entre ambientes
 * de desenvolvimento e produção.
 */

// Mude para 'true' quando fizer o deploy da aplicação para produção.
const IS_PRODUCTION = true;

// ATENÇÃO: Substitua esta URL pela URL do seu serviço backend no Render.
const PRODUCTION_API_URL = 'https://cliquesg-2025.onrender.com';
const DEVELOPMENT_API_URL = 'http://localhost:3001';

export const API_BASE_URL = IS_PRODUCTION 
  ? PRODUCTION_API_URL 
  : DEVELOPMENT_API_URL;