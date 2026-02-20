import useTheme from '../../hooks/useTheme'
import './ThemeToggle.css'

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      className={`theme-toggle ${isDark ? 'theme-toggle--dark' : 'theme-toggle--light'}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="theme-toggle__track">
        <span className="theme-toggle__thumb" />
      </span>
      <span className="theme-toggle__label">
        {isDark ? 'dark' : 'light'}
      </span>
    </button>
  )
}

export default ThemeToggle
