import { test, expect } from '@playwright/test';

test.describe('Desafio Goledger - Inicio da Automação E2E', () => {

  test('Deve fazer login como Admin, tentar buscar um livro e expor o BUG-004', async ({ page }) => {
    

    const APP_URL = 'http://localhost:3000/login';
    const LOGIN_USER = 'admin';
    const LOGIN_PASS = 'admin123';
    const AUTHOR_NAME = 'Tolkien';
    const EXPECTED_BOOK = 'O Senhor dos Anéis';
    
    // 1. ACESSANDO A APLICAÇÃO E FAZENDO LOGIN
    await page.goto(APP_URL); 
    
    await page.getByRole('textbox', { name: 'Username' }).fill(LOGIN_USER);
    await page.getByPlaceholder('Enter your password').fill(LOGIN_PASS);
    await page.getByRole('button', { name: 'Sign In' }).click();

    // 2. NAVEGANDO PARA A TELA DE LIVROS
    await page.getByRole('button', { name: 'Books' }).click();

    // 3. BUSCANDO POR AUTOR 
    await page.locator('#s-author').fill(AUTHOR_NAME); 
    
    // 4. CLICANDO NO BOTÃO DE BUSCA
    await page.getByRole('button', { name: 'Search' }).click();

    // 5. VALIDA SE O LIVRO FOI LISTADO CORRETAMENTE
    const tabela = page.locator('table');
    await expect(tabela).toContainText(EXPECTED_BOOK);
  });

});