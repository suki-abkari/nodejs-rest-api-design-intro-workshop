const dotenv = require("dotenv");
const logger = require("loglevel");

dotenv.config();

const ENV = process.env.NODE_ENV || "development";

logger.enableAll();

<<<<<<< HEAD
const {
    MONGODB_USERNAME,
    MONGODB_PASSWORD,
    MONGODB_PROJECT_ID,
    NODE_ENV: ENV = "development",
} = process.env;



const CONFIG = {
    production: {
        app: {
            PORT: process.env.PORT || 4000,
        },
        client: {
            URL: process.env.CLIENT_URL || "http://localhost:3000",
        },
        logger: {
            warn: logger.warn,
            info: logger.info,
            error: logger.error,
            trace: logger.trace,
            debug: logger.debug,
        },
        db: {
            url: `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_PROJECT_ID}.mongodb.net/dani-demo-db?retryWrites=true&w=majority`,

            url: process.env.DB_URL,
        },
        firebase: {
            certConfig: {
                type: process.env.FB_CERT_TYPE,
                project_id: process.env.FB_CERT_PROJECT_ID,
                private_key_id: process.env.FB_CERT_PRIVATE_KEY_ID,
                private_key: process.env.FB_CERT_PRIVATE_KEY.replace(/\\n/gm, "\n"),
                client_email: process.env.FB_CERT_CLIENT_EMAIL,
                client_id: process.env.FB_CERT_CLIENT_ID,
                auth_uri: process.env.FB_CERT_AUTH_URI,
                token_uri: process.env.FB_CERT_TOKEN_URI,
                auth_provider_x509_cert_url: process.env.FB_CERT_AUTH_PROVIDER_X_509_CERT_URL,
                client_x509_cert_url: process.env.FB_CERT_CLIENT_X_509_CERT_URL,
            },
        },
=======
const { ENV} = {
MONGODB_USERNAME,
  MONGODB_PASSWORD,
  MONGODB_PROJECT_ID,
  NODE_ENV: ENV = "developmet",
} = process.env;


  

const CONFIG = {
  production: {
    app: {
      PORT: process.env.PORT || 4000,
    },
    client: {
      URL: process.env.CLIENT_URL || "http://localhost:3000",
    },
    logger: {
      warn: logger.warn,
      info: logger.info,
      error: logger.error,
      trace: logger.trace,
      debug: logger.debug,
    },
    db: {
      url: `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_PROJECT_ID}.mongodb.net/dani-demo-db?retryWrites=true&w=majority`,
    },
    firebase: {
      certConfig: {
        type: process.env.FB_CERT_TYPE,
        project_id: process.env.FB_CERT_PROJECT_ID,
        private_key_id: process.env.FB_CERT_PRIVATE_KEY_ID,
        private_key: process.env.FB_CERT_PRIVATE_KEY,
        client_email: process.env.FB_CERT_CLIENT_EMAIL,
        client_id: process.env.FB_CERT_CLIENT_ID,
        auth_uri: process.env.FB_CERT_AUTH_URI,
        token_uri: process.env.FB_CERT_TOKEN_URI,
        auth_provider_x509_cert_url:
          process.env.FB_CERT_AUTH_PROVIDER_X_509_CERT_URL,
        client_x509_cert_url: process.env.FB_CERT_CLIENT_X_509_CERT_URL,
      },
    },
  },
  development: {
    app: {
      PORT: process.env.PORT || 4000,
    },
    client: {
      URL: process.env.CLIENT_URL || "http://localhost:3000",
    },
    logger: {
      warn: logger.warn,
      info: logger.info,
      error: logger.error,
      trace: logger.trace,
      debug: logger.debug,
    },
    db: {
      url: process.env.DB_URL,
    },
    firebase: {
      certConfig: {
        type: process.env.FB_CERT_TYPE,
        project_id: process.env.FB_CERT_PROJECT_ID,
        private_key_id: process.env.FB_CERT_PRIVATE_KEY_ID,
        private_key: process.env.FB_CERT_PRIVATE_KEY,
        client_email: process.env.FB_CERT_CLIENT_EMAIL,
        client_id: process.env.FB_CERT_CLIENT_ID,
        auth_uri: process.env.FB_CERT_AUTH_URI,
        token_uri: process.env.FB_CERT_TOKEN_URI,
        auth_provider_x509_cert_url:
          process.env.FB_CERT_AUTH_PROVIDER_X_509_CERT_URL,
        client_x509_cert_url: process.env.FB_CERT_CLIENT_X_509_CERT_URL,
      },
    },
  },
  test: {
    app: {
      PORT: process.env.PORT || 4000,
    },
    client: {
      URL: process.env.CLIENT_URL || "http://localhost:3000",
    },
    logger: {
      warn: logger.warn,
      info: logger.info,
      error: logger.error,
      trace: logger.trace,
      debug: logger.debug,
>>>>>>> f6d6279d2ed58118ad20cf9736e4574bfd798a07
    },
    development: {
        app: {
            PORT: process.env.PORT || 4000,
        },
        client: {
            URL: process.env.CLIENT_URL || "http://localhost:3000",
        },
        logger: {
            warn: logger.warn,
            info: logger.info,
            error: logger.error,
            trace: logger.trace,
            debug: logger.debug,
        },
        db: {
            url: process.env.DB_URL,
        },
        firebase: {
            certConfig: {
                type: process.env.FB_CERT_TYPE,
                project_id: process.env.FB_CERT_PROJECT_ID,
                private_key_id: process.env.FB_CERT_PRIVATE_KEY_ID.replace(/\\n/gm, "\n"),
                private_key: process.env.FB_CERT_PRIVATE_KEY,
                client_email: process.env.FB_CERT_CLIENT_EMAIL,
                client_id: process.env.FB_CERT_CLIENT_ID,
                auth_uri: process.env.FB_CERT_AUTH_URI,
                token_uri: process.env.FB_CERT_TOKEN_URI,
                auth_provider_x509_cert_url: process.env.FB_CERT_AUTH_PROVIDER_X_509_CERT_URL,
                client_x509_cert_url: process.env.FB_CERT_CLIENT_X_509_CERT_URL,
            },
        },
    },
    test: {
        app: {
            PORT: process.env.PORT || 4000,
        },
        client: {
            URL: process.env.CLIENT_URL || "http://localhost:3000",
        },
        logger: {
            warn: logger.warn,
            info: logger.info,
            error: logger.error,
            trace: logger.trace,
            debug: logger.debug,
        },
        db: {
            url: process.env.DB_URL,
        },
        firebase: {
            certConfig: {
                type: process.env.FB_CERT_TYPE,
                project_id: process.env.FB_CERT_PROJECT_ID,
                private_key_id: process.env.FB_CERT_PRIVATE_KEY_ID.replace(/\\n/gm, "\n"),
                private_key: process.env.FB_CERT_PRIVATE_KEY,
                client_email: process.env.FB_CERT_CLIENT_EMAIL,
                client_id: process.env.FB_CERT_CLIENT_ID,
                auth_uri: process.env.FB_CERT_AUTH_URI,
                token_uri: process.env.FB_CERT_TOKEN_URI,
                auth_provider_x509_cert_url: process.env.FB_CERT_AUTH_PROVIDER_X_509_CERT_URL,
                client_x509_cert_url: process.env.FB_CERT_CLIENT_X_509_CERT_URL,
            },
        },
    },
};

module.exports = CONFIG[ENV];