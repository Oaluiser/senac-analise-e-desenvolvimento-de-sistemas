from selenium.webdriver.common.by import By
from selenium import webdriver
import pytest
import time

# Para usar o safari tem que fazer uma configuração em settings > developer

@pytest.fixture
def browser():
    driver = webdriver.Safari()
    yield driver
    driver.quit()

def test_successful_login(browser):
    browser.get("https://seubarriga.wcaquino.me/login")
    browser.find_element(By.ID, "email").send_keys("grupo9@mail.com")
    browser.find_element(By.ID, "senha").send_keys("grupo9")
    browser.find_element(By.XPATH, "/html/body/div[2]/form/button").click()
    time.sleep(1)
    assert "Bem vindo" in browser.page_source

def test_incorrect_password(browser):
    browser.get("https://seubarriga.wcaquino.me/login")
    browser.find_element(By.ID, "email").send_keys("grupo9@mail.com")
    browser.find_element(By.ID, "senha").send_keys("senhaIncorreta")
    browser.find_element(By.XPATH, "/html/body/div[2]/form/button").click()
    time.sleep(1)
    assert "Problemas com o login" in browser.page_source

def test_special_characters(browser):
    browser.get("https://seubarriga.wcaquino.me/login")
    browser.find_element(By.ID, "email").send_keys("!@#$%^&*()")
    browser.find_element(By.ID, "senha").send_keys("!@#$%^&*()")
    browser.find_element(By.XPATH, "/html/body/div[2]/form/button").click()
    time.sleep(1)
    assert "Bem vindo" not in browser.page_source

def test_special_characters(browser):
    browser.get("https://seubarriga.wcaquino.me/login")
    browser.find_element(By.ID, "email").send_keys("!@#$%^&*()")
    browser.find_element(By.ID, "senha").send_keys("!@#$%^&*()")
    browser.find_element(By.XPATH, "/html/body/div[2]/form/button").click()
    time.sleep(1)
    assert "Enter an email address" in browser.page_source

def test_empty_email(browser):
    browser.get("https://seubarriga.wcaquino.me/login")
    browser.find_element(By.ID, "email").send_keys("")
    browser.find_element(By.ID, "senha").send_keys("teste")
    browser.find_element(By.XPATH, "/html/body/div[2]/form/button").click()
    time.sleep(1)
    assert "Email é um campo obrigatório" in browser.page_source

def test_empty_password(browser):
    browser.get("https://seubarriga.wcaquino.me/login")
    browser.find_element(By.ID, "email").send_keys("teste@mail.com")
    browser.find_element(By.ID, "senha").send_keys("")
    browser.find_element(By.XPATH, "/html/body/div[2]/form/button").click()
    time.sleep(1)
    assert "Senha é um campo obrigatório" in browser.page_source
