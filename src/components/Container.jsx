function Container({ as: Element = 'div', className = '', children }) {
  return <Element className={`container ${className}`.trim()}>{children}</Element>
}

export default Container
