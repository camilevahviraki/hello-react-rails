if Rails.env.development?
    pin 'react', to: 'https://ga.jspm.io/npm:react@17.0.2/dev.index.js'
    pin 'react-dom', to: 'https://ga.jspm.io/npm:react-dom@17.0.2/dev.index.js'
    pin 'object-assign', to: 'https://ga.jspm.io/npm:object-assign@4.1.1/index.js'
    pin 'scheduler', to: 'https://ga.jspm.io/npm:scheduler@0.20.2/dev.index.js'
    pin 'scheduler/tracing', to: 'https://ga.jspm.io/npm:scheduler@0.20.2/dev.tracing.js'
    pin 'prop-types', to: 'https://ga.jspm.io/npm:prop-types@15.8.0/dev.index.js'
  else
    pin 'react', to: 'https://ga.jspm.io/npm:react@17.0.2/index.js'
    pin 'object-assign', to: 'https://ga.jspm.io/npm:object-assign@4.1.1/index.js'
    pin 'react-dom', to: 'https://ga.jspm.io/npm:react-dom@17.0.2/index.js'
    pin 'scheduler', to: 'https://ga.jspm.io/npm:scheduler@0.20.2/index.js'
    pin 'prop-types', to: 'https://ga.jspm.io/npm:prop-types@15.8.0/index.js'
  end

# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "react", to: "https://ga.jspm.io/npm:react@18.2.0/index.js"
pin 'htm', to: 'https://ga.jspm.io/npm:htm@3.1.0/dist/htm.module.js'
