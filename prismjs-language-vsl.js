Prism.languages.vsl = Prism.languages.extend('clike', {
	'string': {
		pattern: /("|')(#(?:{(?:[^{}]|\{[^}]+\})+\})|\\[\s\S]|(?!\1)[^\\\r\n])*\1/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /#\{(?:[^{}]|\([^}]+\})+\}/,
				inside: {
					delimiter: {
						pattern: /^#\{|\}$/,
						alias: 'variable'
					}
				}
			}
		}
	},
	'keyword': /\b(?:as|break|case|catch|class|continue|default|deinit|didSet|do|else|enum|extend|for|func|get|if|import|in|init|is|lazy|let|override|private|interface|public|return|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|var|weak|where|while|willSet)\b/,
	'number': /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
	'constant': /\b(?:nil|[A-Z_]{2,})\b/,
	'atrule': /@\b(?:backend|dynamic|inline|primitive|mock|booleanProvider|staticEnumProvider|manifestAsRoot)\b/,
	'builtin': /\b(?:[A-Z]\S+|abs|assert|filter|find|first|join|last|map|max|min|print|reduce|Reflection|sort|split|toString|(?:Opaque)?Pointer|Array|String|U?Int(?:8|16|32|64)|Regex|Object|Double|Float|Bool|Optional)\b/
});
Prism.languages.vsl['string'].inside['interpolation'].inside.rest = Prism.languages.vsl;
