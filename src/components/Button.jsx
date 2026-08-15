function Button({ href, variant = 'primary', download, children }) {
  const className = `button button--${variant}`

  if (href) {
    const isExternal = href.startsWith('http')

    return (
      <a
        className={className}
        href={href}
        download={download}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noreferrer' : undefined}
      >
        {children}
        <span aria-hidden="true">{isExternal ? '↗' : '→'}</span>
        {isExternal && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    )
  }

  return <button className={className} type="button">{children}</button>
}

export default Button
