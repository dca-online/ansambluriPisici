class ThemeManager{constructor(){this.themeToggle=document.querySelector('.theme-toggle');this.currentTheme=localStorage.getItem('theme')||'light';this.init()}
init(){document.body.setAttribute('data-theme',this.currentTheme);this.updateToggleIcon();this.themeToggle.addEventListener('click',()=>this.toggleTheme())}
toggleTheme(){this.currentTheme=this.currentTheme==='light'?'dark':'light';document.body.setAttribute('data-theme',this.currentTheme);localStorage.setItem('theme',this.currentTheme);this.updateToggleIcon()}
updateToggleIcon(){const icon=this.themeToggle.querySelector('.icon');icon.textContent=this.currentTheme==='light'?'🌙':'☀️'}}
document.addEventListener('DOMContentLoaded',()=>{new ThemeManager()})