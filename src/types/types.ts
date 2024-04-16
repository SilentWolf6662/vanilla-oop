/**
 * Represents a navigation component with tabs and icons for scrolling.
 */
export interface Projects {
	projects: ProjectElement[]
}

export interface ProjectElement {
	navText: string
	name: string
	description: string
	imageSrc: string
	technologies: string[]
	status: string
	repositoryLink: string
	liveLink: string
}

export enum Technology {
	Scss = 'SCSS',
	TypeScript = 'TypeScript',
	TailwindCSS = 'Tailwind CSS',
	Bootstrap = 'Bootstrap',
	MaterialUI = 'Material-UI',
	ChakraUI = 'Chakra UI',
	shadcnui = 'Shadcn/ui',
	AntDesign = 'Ant Design',
	StyledComponents = 'Styled Components',
	Emotion = 'Emotion',
	FramerMotion = 'Framer Motion',
	bcrypt = 'bcrypt',
	Contentful = 'Contentful',
	Sanity = 'Sanity',
	Strapi = 'Strapi',
	GraphQLCMS = 'GraphQL CMS',
	WordPress = 'WordPress',
	Shopify = 'Shopify',
	Magento = 'Magento',
	WooCommerce = 'WooCommerce',
	BigCommerce = 'BigCommerce',
	Squarespace = 'Squarespace',
	Wix = 'Wix',
	Webflow = 'Webflow',
	Gatsby = 'Gatsby',
	Prisma = 'Prisma',
	Next = 'Next.js',
	Vite = 'Vite',
	HTML = 'HTML',
	CSS = 'CSS',
	JavaScript = 'JavaScript',
	React = 'React',
	Redux = 'Redux',
	Node = 'Node',
	Express = 'Express',
	MongoDB = 'MongoDB',
	Mongoose = 'Mongoose',
	Jest = 'Jest',
	TestingLibrary = 'Testing Library',
	Cypress = 'Cypress',
	Webpack = 'Webpack',
	Babel = 'Babel',
	ESLint = 'ESLint',
	Prettier = 'Prettier',
	Git = 'Git',
	GitHub = 'GitHub',
	GitLab = 'GitLab',
	Bitbucket = 'Bitbucket',
	Docker = 'Docker',
	Kubernetes = 'Kubernetes',
	AWS = 'AWS',
	Azure = 'Azure',
	GCP = 'GCP',
	Heroku = 'Heroku',
	Netlify = 'Netlify',
	Vercel = 'Vercel',
	Firebase = 'Firebase',
	SQL = 'SQL',
	MySQL = 'MySQL',
	PostgreSQL = 'PostgreSQL',
	SQLite = 'SQLite',
	NoSQL = 'NoSQL',
	Redis = 'Redis',
	GraphQL = 'GraphQL',
	Apollo = 'Apollo',
	REST = 'REST',
	OAuth = 'OAuth',
	JWT = 'JWT',
	WebSockets = 'WebSockets',
	WebRTC = 'WebRTC',
	Electron = 'Electron',
	Flutter = 'Flutter',
	Dart = 'Dart',
	Python = 'Python',
	Django = 'Django',
	Flask = 'Flask',
	Ruby = 'Ruby',
	Rails = 'Rails',
	Java = 'Java',
	Spring = 'Spring',
	Kotlin = 'Kotlin',
	Scala = 'Scala',
	Clojure = 'Clojure',
	Groovy = 'Groovy',
	PHP = 'PHP',
	Laravel = 'Laravel',
	Symfony = 'Symfony',
	CSharp = 'C#',
	DOTNET = '.NET',
	Unity = 'Unity',
	Unreal = 'Unreal',
	CPlusPlus = 'C++',
	Rust = 'Rust',
	Go = 'Go',
	Swift = 'Swift',
	ObjectiveC = 'Objective-C',
	C = 'C',
	R = 'R',
	MATLAB = 'MATLAB',
	Octave = 'Octave',
	Julia = 'Julia',
	Haskell = 'Haskell',
	Erlang = 'Erlang',
	Elixir = 'Elixir',
	FSharp = 'F#',
	Assembly = 'Assembly',
	Shell = 'Shell',
	PowerShell = 'PowerShell',
	Makefile = 'Makefile',
	Dockerfile = 'Dockerfile',
	YAML = 'YAML',
	JSON = 'JSON',
	XML = 'XML',
	Markdown = 'Markdown',
	CSV = 'CSV',
	TOML = 'TOML',
	INI = 'INI',
	GraphQLSchema = 'GraphQL Schema',
	OpenAPI = 'OpenAPI',
	Swagger = 'Swagger',
	Protobuf = 'Protobuf',
	Avro = 'Avro',
	Thrift = 'Thrift',
	ApacheKafka = 'Apache Kafka',
	RabbitMQ = 'RabbitMQ',
	ApacheMQ = 'Apache MQ',
	RedisMQ = 'Redis MQ',
	ActiveMQ = 'ActiveMQ',
	ZeroMQ = 'ZeroMQ',
	NATS = 'NATS',
	MQTT = 'MQTT',
	AMQP = 'AMQP',
	STOMP = 'STOMP',
	WebSocketsProtocol = 'WebSockets Protocol',
	WebRTCProtocol = 'WebRTC Protocol',
	HTTP = 'HTTP',
	HTTPS = 'HTTPS',
	HTTP2 = 'HTTP/2',
	HTTP3 = 'HTTP/3',
	TCP = 'TCP',
	UDP = 'UDP',
	IP = 'IP',
	DNS = 'DNS',
	DHCP = 'DHCP',
	FTP = 'FTP',
	SFTP = 'SFTP',
	SCP = 'SCP',
	SSH = 'SSH',
	Telnet = 'Telnet',
	SMTP = 'SMTP',
	POP = 'POP',
	IMAP = 'IMAP',
	HTTPStatusCodes = 'HTTP Status Codes',
	HTTPMethods = 'HTTP Methods',
	HTTPHeaders = 'HTTP Headers',
	HTTPCookies = 'HTTP Cookies',
	HTTPCache = 'HTTP Cache',
	HTTPCompression = 'HTTP Compression',
	HTTPSecurity = 'HTTP Security',
	HTTPAuthentication = 'HTTP Authentication',
	HTTPAuthorization = 'HTTP Authorization',
	HTTPSession = 'HTTP Session',
	HTTPRedirects = 'HTTP Redirects',
	HTTPProxies = 'HTTP Proxies',
	HTTPCORS = 'HTTP CORS',
	HTTPPreflight = 'HTTP Preflight',
	HTTPCaching = 'HTTP Caching',
	More = 'More...'
}

export enum Status {
	Completed = 'Completed',
	InProgress = 'In Progress',
	Planned = 'Planned',
	Archived = 'Archived'
}

export enum LinkType {
	Repository = 'Repository',
	Live = 'Live'
}

export enum LinkStatus {
	Available = 'Available',
	NotAvailable = 'Not Available'
}

export interface Contact {
    method: string
}

export interface Contacts {
	contact: {
		email: string
		phone: string
		github: string
		linkedin: string
		discord: string
	}
}
