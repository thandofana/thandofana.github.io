function Button({ href, variant = 'primary', download, newTab = false, children }) {
  const className = `button button--${variant}`

  if (href) {
    const opensNewTab = newTab || href.startsWith('http')

    return (
      <a
        className={className}
        href={href}
        download={download}
        target={opensNewTab ? '_blank' : undefined}
        rel={opensNewTab ? 'noreferrer' : undefined}
      >
        {children}
        <span aria-hidden="true">{opensNewTab ? '↗' : '→'}</span>
        {opensNewTab && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    )
  }

  return <button className={className} type="button">{children}</button>
}

export default Button
