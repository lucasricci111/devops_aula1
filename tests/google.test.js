const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const test = require('node:test');
const assert = require('node:assert');

test('Acessar o Google e verificar o título', async () => {
  // Configura o navegador para rodar em modo Headless (obrigatório para o GitHub Actions)
  const options = new chrome.Options();
  options.addArguments('--headless');
  options.addArguments('--no-sandbox');
  options.addArguments('--disable-dev-shm-usage');

  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    // Executa o fluxo de teste simulando o usuário
    await driver.get('https://google.com');
    const title = await driver.getTitle();
    
    // Valida se o título contém a palavra Google
    assert.match(title, /Google/);
  } finally {
    // Fecha o navegador ao terminar
    await driver.quit();
  }
});
