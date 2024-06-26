const dependencyList = [
  {
    name: "Developer Tools",
    values: [
      {
        id: "native",
        name: "GraalVM Native Support",
        description:
          "Support for compiling Spring applications to native executables using the GraalVM native-image compiler.",
      },
      {
        id: "dgs-codegen",
        name: "GraphQL DGS Code Generation",
        description:
          "Generate data types and type-safe APIs for querying GraphQL APIs by parsing schema files.",
        versionRange: "3.0.0.M1",
      },
      {
        id: "devtools",
        name: "Spring Boot DevTools",
        description:
          "Provides fast application restarts, LiveReload, and configurations for enhanced development experience.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#using.devtools",
            templated: true,
          },
        },
      },
      {
        id: "configuration-processor",
        name: "Spring Configuration Processor",
        description:
          'Generate metadata for developers to offer contextual help and "code completion" when working with custom configuration keys (ex.application.properties/.yml files).',
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#appendix.configuration-metadata.annotation-processor",
            templated: true,
          },
        },
      },
      {
        id: "docker-compose",
        name: "Docker Compose Support",
        description:
          "Provides docker compose support for enhanced development experience.",
        versionRange: "3.1.0.M1",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#features.docker-compose",
            templated: true,
          },
        },
      },
      {
        id: "modulith",
        name: "Spring Modulith",
        description: "Support for building modular monolithic applications.",
        versionRange: "3.1.0.RELEASE",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-modulith/reference/",
          },
        },
      },
    ],
  },
  {
    name: "Web",
    values: [
      {
        id: "webflux",
        name: "Spring Reactive Web",
        description:
          "Build reactive web applications with Spring WebFlux and Netty.",
        _links: {
          guide: {
            href: "https://spring.io/guides/gs/reactive-rest-service/",
            title: "Building a Reactive RESTful Web Service",
          },
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#web.reactive",
            templated: true,
          },
        },
      },
      {
        id: "graphql",
        name: "Spring for GraphQL",
        description:
          "Build GraphQL applications with Spring for GraphQL and GraphQL Java.",
        _links: {
          guide: {
            href: "https://spring.io/guides/gs/graphql-server/",
            title: "Building a GraphQL service",
          },
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#web.graphql",
            templated: true,
          },
        },
      },
      {
        id: "data-rest",
        name: "Rest Repositories",
        description:
          "Exposing Spring Data repositories over REST via Spring Data REST.",
        _links: {
          guide: [
            {
              href: "https://spring.io/guides/gs/accessing-data-rest/",
              title: "Accessing JPA Data with REST",
            },
            {
              href: "https://spring.io/guides/gs/accessing-neo4j-data-rest/",
              title: "Accessing Neo4j Data with REST",
            },
            {
              href: "https://spring.io/guides/gs/accessing-mongodb-data-rest/",
              title: "Accessing MongoDB Data with REST",
            },
          ],
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#howto.data-access.exposing-spring-data-repositories-as-rest",
            templated: true,
          },
        },
      },
      {
        id: "session",
        name: "Spring Session",
        description:
          "Provides an API and implementations for managing user session information.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-session/reference/",
          },
        },
      },
      {
        id: "data-rest-explorer",
        name: "Rest Repositories HAL Explorer",
        description: "Browsing Spring Data REST repositories in your browser.",
      },
      {
        id: "hateoas",
        name: "Spring HATEOAS",
        description:
          "Eases the creation of RESTful APIs that follow the HATEOAS principle when working with Spring / Spring MVC.",
        _links: {
          guide: {
            href: "https://spring.io/guides/gs/rest-hateoas/",
            title: "Building a Hypermedia-Driven RESTful Web Service",
          },
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#web.spring-hateoas",
            templated: true,
          },
        },
      },
      {
        id: "web-services",
        name: "Spring Web Services",
        description:
          "Facilitates contract-first SOAP development. Allows for the creation of flexible web services using one of the many ways to manipulate XML payloads.",
        _links: {
          guide: {
            href: "https://spring.io/guides/gs/producing-web-service/",
            title: "Producing a SOAP web service",
          },
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#io.webservices",
            templated: true,
          },
        },
      },
      {
        id: "jersey",
        name: "Jersey",
        description:
          "Framework for developing RESTful Web Services in Java that provides support for JAX-RS APIs.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#web.servlet.jersey",
            templated: true,
          },
        },
      },
      {
        id: "vaadin",
        name: "Vaadin",
        description:
          "A web framework that allows you to write UI in pure Java without getting bogged down in JS, HTML, and CSS.",
        versionRange: "[3.0.0.RELEASE,3.3.0.M1)",
        _links: {
          guide: {
            href: "https://spring.io/guides/gs/crud-with-vaadin/",
            title: "Creating CRUD UI with Vaadin",
          },
          reference: {
            href: "https://vaadin.com/docs",
          },
        },
      },
      {
        id: "hilla",
        name: "Hilla",
        description:
          "An open source framework that integrates a Spring Boot Java backend with a reactive TypeScript frontend.",
        versionRange: "[3.1.0.M1,3.3.0.M1)",
        _links: {
          guide: {
            href: "https://hilla.dev/docs/react/start/quick/#coming-from-spring-initializr",
            title: "Next Steps with Hilla",
          },
          reference: {
            href: "https://hilla.dev/",
          },
        },
      },
    ],
  },
  {
    name: "Template Engines",
    values: [
      {
        id: "thymeleaf",
        name: "Thymeleaf",
        description:
          "A modern server-side Java template engine for both web and standalone environments. Allows HTML to be correctly displayed in browsers and as static prototypes.",
        _links: {
          guide: {
            href: "https://spring.io/guides/gs/handling-form-submission/",
            title: "Handling Form Submission",
          },
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#web.servlet.spring-mvc.template-engines",
            templated: true,
          },
        },
      },
      {
        id: "freemarker",
        name: "Apache Freemarker",
        description:
          "Java library to generate text output (HTML web pages, e-mails, configuration files, source code, etc.) based on templates and changing data.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#web.servlet.spring-mvc.template-engines",
            templated: true,
          },
        },
      },
      {
        id: "mustache",
        name: "Mustache",
        description:
          "Logic-less templates for both web and standalone environments. There are no if statements, else clauses, or for loops. Instead there are only tags.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#web.servlet.spring-mvc.template-engines",
            templated: true,
          },
        },
      },
      {
        id: "groovy-templates",
        name: "Groovy Templates",
        description: "Groovy templating engine.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#web.servlet.spring-mvc.template-engines",
            templated: true,
          },
        },
      },
    ],
  },
  {
    name: "Security",
    values: [
      {
        id: "security",
        name: "Spring Security",
        description:
          "Highly customizable authentication and access-control framework for Spring applications.",
        _links: {
          guide: [
            {
              href: "https://spring.io/guides/gs/securing-web/",
              title: "Securing a Web Application",
            },
            {
              href: "https://spring.io/guides/tutorials/spring-boot-oauth2/",
              title: "Spring Boot and OAuth2",
            },
            {
              href: "https://spring.io/guides/gs/authenticating-ldap/",
              title: "Authenticating a User with LDAP",
            },
          ],
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#web.security",
            templated: true,
          },
        },
      },
      {
        id: "oauth2-client",
        name: "OAuth2 Client",
        description:
          "Spring Boot integration for Spring Security's OAuth2/OpenID Connect client features.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#web.security.oauth2.client",
            templated: true,
          },
        },
      },
      {
        id: "oauth2-authorization-server",
        name: "OAuth2 Authorization Server",
        description: "Spring Boot integration for Spring Authorization Server.",
        versionRange: "3.1.0.RC1",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#web.security.oauth2.authorization-server",
            templated: true,
          },
        },
      },
      {
        id: "oauth2-resource-server",
        name: "OAuth2 Resource Server",
        description:
          "Spring Boot integration for Spring Security's OAuth2 resource server features.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#web.security.oauth2.server",
            templated: true,
          },
        },
      },
      {
        id: "data-ldap",
        name: "Spring LDAP",
        description:
          "Makes it easier to build Spring based applications that use the Lightweight Directory Access Protocol.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.nosql.ldap",
            templated: true,
          },
        },
      },
      {
        id: "okta",
        name: "Okta",
        description:
          "Okta specific configuration for Spring Security/Spring Boot OAuth2 features. Enable your Spring Boot application to work with Okta via OAuth 2.0/OIDC.",
        versionRange: "[3.0.0.RELEASE,3.3.0.M1)",
        _links: {
          guide: [
            {
              href: "https://github.com/okta/samples-java-spring/tree/master/okta-hosted-login",
              title: "Okta-Hosted Login Page Example",
            },
            {
              href: "https://github.com/okta/samples-java-spring/tree/master/custom-login",
              title: "Custom Login Page Example",
            },
            {
              href: "https://github.com/okta/samples-java-spring/tree/master/resource-server",
              title: "Okta Spring Security Resource Server Example",
            },
          ],
          reference: {
            href: "https://github.com/okta/okta-spring-boot#readme",
            title: "Okta Spring Boot documentation",
          },
        },
      },
    ],
  },
  {
    name: "SQL",
    values: [
      {
        id: "jdbc",
        name: "JDBC API",
        description:
          "Database Connectivity API that defines how a client may connect and query a database.",
        _links: {
          guide: [
            {
              href: "https://spring.io/guides/gs/relational-data-access/",
              title: "Accessing Relational Data using JDBC with Spring",
            },
            {
              href: "https://spring.io/guides/gs/managing-transactions/",
              title: "Managing Transactions",
            },
          ],
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.sql",
            templated: true,
          },
        },
      },
      {
        id: "data-jpa",
        name: "Spring Data JPA",
        description:
          "Persist data in SQL stores with Java Persistence API using Spring Data and Hibernate.",
        _links: {
          guide: {
            href: "https://spring.io/guides/gs/accessing-data-jpa/",
            title: "Accessing Data with JPA",
          },
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.sql.jpa-and-spring-data",
            templated: true,
          },
        },
      },
      {
        id: "data-jdbc",
        name: "Spring Data JDBC",
        description:
          "Persist data in SQL stores with plain JDBC using Spring Data.",
        _links: {
          guide: {
            href: "https://github.com/spring-projects/spring-data-examples/tree/master/jdbc/basics",
            title: "Using Spring Data JDBC",
          },
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.sql.jdbc",
            templated: true,
          },
        },
      },
      {
        id: "data-r2dbc",
        name: "Spring Data R2DBC",
        description:
          "Provides Reactive Relational Database Connectivity to persist data in SQL stores using Spring Data in reactive applications.",
        _links: {
          guide: {
            href: "https://spring.io/guides/gs/accessing-data-r2dbc/",
            title: "Accessing data with R2DBC",
          },
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.sql.r2dbc",
            templated: true,
          },
          home: {
            href: "https://r2dbc.io",
            title: "R2DBC Homepage",
          },
        },
      },
      {
        id: "mybatis",
        name: "MyBatis Framework",
        description:
          "Persistence framework with support for custom SQL, stored procedures and advanced mappings. MyBatis couples objects with stored procedures or SQL statements using a XML descriptor or annotations.",
        versionRange: "[3.0.0.RELEASE,3.3.0.M1)",
        _links: {
          guide: {
            href: "https://github.com/mybatis/spring-boot-starter/wiki/Quick-Start",
            title: "MyBatis Quick Start",
          },
          reference: {
            href: "https://mybatis.org/spring-boot-starter/mybatis-spring-boot-autoconfigure/",
          },
        },
      },
      {
        id: "liquibase",
        name: "Liquibase Migration",
        description: "Liquibase database migration and source control library.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#howto.data-initialization.migration-tool.liquibase",
            templated: true,
          },
        },
      },
      {
        id: "flyway",
        name: "Flyway Migration",
        description:
          "Version control for your database so you can migrate from any version (incl. an empty database) to the latest version of the schema.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#howto.data-initialization.migration-tool.flyway",
            templated: true,
          },
        },
      },
      {
        id: "jooq",
        name: "JOOQ Access Layer",
        description:
          "Generate Java code from your database and build type safe SQL queries through a fluent API.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.sql.jooq",
            templated: true,
          },
        },
      },
      {
        id: "db2",
        name: "IBM DB2 Driver",
        description: "A JDBC driver that provides access to IBM DB2.",
      },
      {
        id: "derby",
        name: "Apache Derby Database",
        description:
          "An open source relational database implemented entirely in Java.",
      },
      {
        id: "h2",
        name: "H2 Database",
        description:
          "Provides a fast in-memory database that supports JDBC API and R2DBC access, with a small (2mb) footprint. Supports embedded and server modes as well as a browser based console application.",
      },
      {
        id: "hsql",
        name: "HyperSQL Database",
        description: "Lightweight 100% Java SQL Database Engine.",
      },
      {
        id: "mariadb",
        name: "MariaDB Driver",
        description: "MariaDB JDBC and R2DBC driver.",
      },
      {
        id: "sqlserver",
        name: "MS SQL Server Driver",
        description:
          "A JDBC and R2DBC driver that provides access to Microsoft SQL Server and Azure SQL Database from any Java application.",
      },
      {
        id: "mysql",
        name: "MySQL Driver",
        description: "MySQL JDBC driver.",
        _links: {
          guide: {
            href: "https://spring.io/guides/gs/accessing-data-mysql/",
            title: "Accessing data with MySQL",
          },
        },
      },
      {
        id: "oracle",
        name: "Oracle Driver",
        description: "A JDBC driver that provides access to Oracle.",
      },
      {
        id: "postgresql",
        name: "PostgreSQL Driver",
        description:
          "A JDBC and R2DBC driver that allows Java programs to connect to a PostgreSQL database using standard, database independent Java code.",
      },
    ],
  },
  {
    name: "NoSQL",
    values: [
      {
        id: "data-redis",
        name: "Spring Data Redis (Access+Driver)",
        description:
          "Advanced and thread-safe Java Redis client for synchronous, asynchronous, and reactive usage. Supports Cluster, Sentinel, Pipelining, Auto-Reconnect, Codecs and much more.",
        _links: {
          guide: {
            href: "https://spring.io/guides/gs/messaging-redis/",
            title: "Messaging with Redis",
          },
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.nosql.redis",
            templated: true,
          },
        },
      },
      {
        id: "data-redis-reactive",
        name: "Spring Data Reactive Redis",
        description:
          "Access Redis key-value data stores in a reactive fashion with Spring Data Redis.",
        _links: {
          guide: {
            href: "https://spring.io/guides/gs/messaging-redis/",
            title: "Messaging with Redis",
          },
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.nosql.redis",
            templated: true,
          },
        },
      },
      {
        id: "data-mongodb",
        name: "Spring Data MongoDB",
        description:
          "Store data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time.",
        _links: {
          guide: {
            href: "https://spring.io/guides/gs/accessing-data-mongodb/",
            title: "Accessing Data with MongoDB",
          },
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.nosql.mongodb",
            templated: true,
          },
        },
      },
      {
        id: "data-mongodb-reactive",
        name: "Spring Data Reactive MongoDB",
        description:
          "Provides asynchronous stream processing with non-blocking back pressure for MongoDB.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.nosql.mongodb",
            templated: true,
          },
          guide: {
            href: "https://spring.io/guides/gs/accessing-data-mongodb/",
            title: "Accessing Data with MongoDB",
          },
        },
      },
      {
        id: "data-elasticsearch",
        name: "Spring Data Elasticsearch (Access+Driver)",
        description:
          "A distributed, RESTful search and analytics engine with Spring Data Elasticsearch.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.nosql.elasticsearch",
            templated: true,
          },
        },
      },
      {
        id: "data-cassandra",
        name: "Spring Data for Apache Cassandra",
        description:
          "A free and open-source, distributed, NoSQL database management system that offers high-scalability and high-performance.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.nosql.cassandra",
            templated: true,
          },
          guide: {
            href: "https://spring.io/guides/gs/accessing-data-cassandra/",
          },
        },
      },
      {
        id: "data-cassandra-reactive",
        name: "Spring Data Reactive for Apache Cassandra",
        description: "Access Cassandra NoSQL Database in a reactive fashion.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.nosql.cassandra",
            templated: true,
          },
          guide: {
            href: "https://spring.io/guides/gs/accessing-data-cassandra/",
          },
        },
      },
      {
        id: "data-couchbase",
        name: "Spring Data Couchbase",
        description:
          "NoSQL document-oriented database that offers in memory-first architecture, geo-distributed deployments, and workload isolation.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.nosql.couchbase",
            templated: true,
          },
        },
      },
      {
        id: "data-couchbase-reactive",
        name: "Spring Data Reactive Couchbase",
        description:
          "Access Couchbase NoSQL database in a reactive fashion with Spring Data Couchbase.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.nosql.couchbase",
            templated: true,
          },
        },
      },
      {
        id: "data-neo4j",
        name: "Spring Data Neo4j",
        description:
          "An open source NoSQL database that stores data structured as graphs consisting of nodes, connected by relationships.",
        _links: {
          guide: {
            href: "https://spring.io/guides/gs/accessing-data-neo4j/",
            title: "Accessing Data with Neo4j",
          },
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.nosql.neo4j",
            templated: true,
          },
        },
      },
    ],
  },
  {
    name: "Messaging",
    values: [
      {
        id: "integration",
        name: "Spring Integration",
        description:
          "Adds support for Enterprise Integration Patterns. Enables lightweight messaging and supports integration with external systems via declarative adapters.",
        _links: {
          guide: {
            href: "https://spring.io/guides/gs/integration/",
            title: "Integrating Data",
          },
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#messaging.spring-integration",
            templated: true,
          },
        },
      },
      {
        id: "amqp",
        name: "Spring for RabbitMQ",
        description:
          "Gives your applications a common platform to send and receive messages, and your messages a safe place to live until received.",
        _links: {
          guide: {
            href: "https://spring.io/guides/gs/messaging-rabbitmq/",
            title: "Messaging with RabbitMQ",
          },
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#messaging.amqp",
            templated: true,
          },
        },
      },
      {
        id: "amqp-streams",
        name: "Spring for RabbitMQ Streams",
        description: "Building stream processing applications with RabbitMQ.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-amqp/reference/stream.html",
          },
        },
      },
      {
        id: "kafka",
        name: "Spring for Apache Kafka",
        description:
          "Publish, subscribe, store, and process streams of records.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#messaging.kafka",
            templated: true,
          },
        },
      },
      {
        id: "kafka-streams",
        name: "Spring for Apache Kafka Streams",
        description:
          "Building stream processing applications with Apache Kafka Streams.",
        _links: {
          guide: {
            href: "https://github.com/spring-cloud/spring-cloud-stream-samples/tree/master/kafka-streams-samples",
            title:
              "Samples for using Apache Kafka Streams with Spring Cloud stream",
          },
          reference: [
            {
              href: "https://docs.spring.io/spring-kafka/docs/current/reference/html/#streams-kafka-streams",
              title: "Apache Kafka Streams Support",
            },
            {
              href: "https://docs.spring.io/spring-cloud-stream/docs/current/reference/htmlsingle/index.html#_kafka_streams_binding_capabilities_of_spring_cloud_stream",
              title:
                "Apache Kafka Streams Binding Capabilities of Spring Cloud Stream",
            },
          ],
        },
      },
      {
        id: "activemq",
        name: "Spring for Apache ActiveMQ 5",
        description: "Spring JMS support with Apache ActiveMQ 'Classic'.",
        _links: {
          guide: {
            href: "https://spring.io/guides/gs/messaging-jms/",
            title: "Java Message Service API via Apache ActiveMQ Classic.",
          },
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#messaging.jms.activemq",
            templated: true,
          },
        },
      },
      {
        id: "artemis",
        name: "Spring for Apache ActiveMQ Artemis",
        description: "Spring JMS support with Apache ActiveMQ Artemis.",
        _links: {
          guide: {
            href: "https://spring.io/guides/gs/messaging-jms/",
            title: "Messaging with JMS",
          },
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#messaging.jms.artemis",
            templated: true,
          },
        },
      },
      {
        id: "pulsar",
        name: "Spring for Apache Pulsar",
        description: "Build messaging applications with Apache Pulsar",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#messaging.pulsar",
            templated: true,
          },
        },
      },
      {
        id: "pulsar-reactive",
        name: "Spring for Apache Pulsar (Reactive)",
        description: "Build reactive messaging applications with Apache Pulsar",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#messaging.pulsar",
            templated: true,
          },
        },
      },
      {
        id: "websocket",
        name: "WebSocket",
        description:
          "Build Servlet-based WebSocket applications with SockJS and STOMP.",
        _links: {
          guide: {
            href: "https://spring.io/guides/gs/messaging-stomp-websocket/",
            title: "Using WebSocket to build an interactive web application",
          },
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#messaging.websockets",
            templated: true,
          },
        },
      },
      {
        id: "rsocket",
        name: "RSocket",
        description: "RSocket.io applications with Spring Messaging and Netty.",
        _links: {
          reference: {
            href: "https://rsocket.io/",
          },
        },
      },
      {
        id: "camel",
        name: "Apache Camel",
        description:
          "Apache Camel is an open source integration framework that empowers you to quickly and easily integrate various systems consuming or producing data.",
        versionRange: "[3.0.0.RELEASE,3.3.0.M1)",
        _links: {
          guide: {
            href: "https://camel.apache.org/camel-spring-boot/latest/spring-boot.html",
            title: "Using Apache Camel with Spring Boot",
          },
        },
      },
      {
        id: "solace",
        name: "Solace PubSub+",
        description:
          "Connect to a Solace PubSub+ Advanced Event Broker to publish, subscribe, request/reply and store/replay messages",
        versionRange: "[3.0.0.RELEASE,3.3.0.M1)",
        _links: {
          reference: [
            {
              href: "https://www.solace.dev/start-spring-io-help/",
              title: "Getting started with Solace and Spring",
            },
            {
              href: "https://solace.dev",
              title: "Solace Developer Portal",
            },
          ],
        },
      },
    ],
  },
  {
    name: "I/O",
    values: [
      {
        id: "batch",
        name: "Spring Batch",
        description:
          "Batch applications with transactions, retry/skip and chunk based processing.",
        _links: {
          guide: {
            href: "https://spring.io/guides/gs/batch-processing/",
            title: "Creating a Batch Service",
          },
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#howto.batch",
            templated: true,
          },
        },
      },
      {
        id: "validation",
        name: "Validation",
        description: "Bean Validation with Hibernate validator.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#io.validation",
            templated: true,
          },
          guide: {
            href: "https://spring.io/guides/gs/validating-form-input/",
          },
        },
      },
      {
        id: "mail",
        name: "Java Mail Sender",
        description:
          "Send email using Java Mail and Spring Framework's JavaMailSender.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#io.email",
            templated: true,
          },
        },
      },
      {
        id: "quartz",
        name: "Quartz Scheduler",
        description: "Schedule jobs using Quartz.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#io.quartz",
            templated: true,
          },
        },
      },
      {
        id: "cache",
        name: "Spring Cache Abstraction",
        description:
          "Provides cache-related operations, such as the ability to update the content of the cache, but does not provide the actual data store.",
        _links: {
          guide: {
            href: "https://spring.io/guides/gs/caching/",
            title: "Caching Data with Spring",
          },
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#io.caching",
            templated: true,
          },
        },
      },
      {
        id: "picocli",
        name: "Picocli",
        description: "Build command line applications with picocli.",
        versionRange: "[3.0.0.RELEASE,3.2.0.M1)",
        _links: {
          reference: {
            href: "https://picocli.info/#_spring_boot_example",
          },
        },
      },
      {
        id: "spring-shell",
        name: "Spring Shell",
        description: "Build command line applications with spring.",
        versionRange: "[3.1.0.RELEASE,3.4.0.M1)",
        _links: {
          reference: {
            href: "https://spring.io/projects/spring-shell",
          },
        },
      },
    ],
  },
  {
    name: "Ops",
    values: [
      {
        id: "actuator",
        name: "Spring Boot Actuator",
        description:
          "Supports built in (or custom) endpoints that let you monitor and manage your application - such as application health, metrics, sessions, etc.",
        _links: {
          guide: {
            href: "https://spring.io/guides/gs/actuator-service/",
            title: "Building a RESTful Web Service with Spring Boot Actuator",
          },
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#actuator",
            templated: true,
          },
        },
      },
      {
        id: "codecentric-spring-boot-admin-client",
        name: "codecentric's Spring Boot Admin (Client)",
        description:
          "Required for your application to register with a Codecentric's Spring Boot Admin Server instance.",
        versionRange: "[3.0.0.RELEASE,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://codecentric.github.io/spring-boot-admin/current/#getting-started",
          },
        },
      },
      {
        id: "codecentric-spring-boot-admin-server",
        name: "codecentric's Spring Boot Admin (Server)",
        description:
          "A community project to manage and monitor your Spring Boot applications. Provides a UI on top of the Spring Boot Actuator endpoints.",
        versionRange: "[3.0.0.RELEASE,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://codecentric.github.io/spring-boot-admin/current/#getting-started",
          },
        },
      },
      {
        id: "sentry",
        name: "Sentry",
        description:
          "Application performance monitoring and error tracking that help software teams see clearer, solve quicker, and learn continuously.",
        versionRange: "[3.0.0.RELEASE,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://docs.sentry.io/platforms/java/",
          },
          guide: {
            href: "https://docs.sentry.io/platforms/java/guides/spring-boot/",
            title: "Getting Started with Sentry",
          },
        },
      },
    ],
  },
  {
    name: "Observability",
    values: [
      {
        id: "datadog",
        name: "Datadog",
        description:
          "Publish Micrometer metrics to Datadog, a dimensional time-series SaaS with built-in dashboarding and alerting.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#actuator.metrics.export.datadog",
            templated: true,
          },
        },
      },
      {
        id: "dynatrace",
        name: "Dynatrace",
        description:
          "Publish Micrometer metrics to Dynatrace, a platform featuring observability, AIOps, application security and analytics.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/index.html#actuator.metrics.export.dynatrace",
          },
        },
      },
      {
        id: "influx",
        name: "Influx",
        description:
          "Publish Micrometer metrics to InfluxDB, a dimensional time-series server that support real-time stream processing of data.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#actuator.metrics.export.influx",
            templated: true,
          },
        },
      },
      {
        id: "graphite",
        name: "Graphite",
        description:
          "Publish Micrometer metrics to Graphite, a hierarchical metrics system backed by a fixed-size database.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#actuator.metrics.export.graphite",
            templated: true,
          },
        },
      },
      {
        id: "new-relic",
        name: "New Relic",
        description:
          "Publish Micrometer metrics to New Relic, a SaaS offering with a full UI and a query language called NRQL.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#actuator.metrics.export.newrelic",
            templated: true,
          },
        },
      },
      {
        id: "prometheus",
        name: "Prometheus",
        description:
          "Expose Micrometer metrics in Prometheus format, an in-memory dimensional time series database with a simple built-in UI, a custom query language, and math operations.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#actuator.metrics.export.prometheus",
            templated: true,
          },
        },
      },
      {
        id: "distributed-tracing",
        name: "Distributed Tracing",
        description: "Enable span and trace IDs in logs.",
      },
      {
        id: "wavefront",
        name: "Wavefront",
        description:
          "Publish metrics and optionally distributed traces to Tanzu Observability by Wavefront, a SaaS-based metrics monitoring and analytics platform that lets you visualize, query, and alert over data from across your entire stack.",
      },
      {
        id: "zipkin",
        name: "Zipkin",
        description: "Enable and expose span and trace IDs to Zipkin.",
      },
    ],
  },
  {
    name: "Testing",
    values: [
      {
        id: "restdocs",
        name: "Spring REST Docs",
        description:
          "Document RESTful services by combining hand-written with Asciidoctor and auto-generated snippets produced with Spring MVC Test.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-restdocs/docs/current/reference/htmlsingle/",
          },
        },
      },
      {
        id: "testcontainers",
        name: "Testcontainers",
        description:
          "Provide lightweight, throwaway instances of common databases, Selenium web browsers, or anything else that can run in a Docker container.",
        _links: {
          reference: {
            href: "https://java.testcontainers.org/",
          },
        },
      },
      {
        id: "cloud-contract-verifier",
        name: "Contract Verifier",
        description:
          "Moves TDD to the level of software architecture by enabling Consumer Driven Contract (CDC) development.",
        _links: {
          reference: {
            href: "https://cloud.spring.io/spring-cloud-contract/reference/htmlsingle/",
          },
        },
      },
      {
        id: "cloud-contract-stub-runner",
        name: "Contract Stub Runner",
        description:
          "Stub Runner for HTTP/Messaging based communication. Allows creating WireMock stubs from RestDocs tests.",
        _links: {
          reference: {
            href: "https://cloud.spring.io/spring-cloud-contract/reference/htmlsingle/index.html#features-stub-runner",
          },
        },
      },
      {
        id: "unboundid-ldap",
        name: "Embedded LDAP Server",
        description:
          "Provides a platform neutral way for running a LDAP server in unit tests.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.nosql.ldap.embedded",
            templated: true,
          },
        },
      },
    ],
  },
  {
    name: "Spring Cloud",
    values: [
      {
        id: "cloud-starter",
        name: "Cloud Bootstrap",
        description:
          "Non-specific Spring Cloud features, unrelated to external libraries or integrations (e.g. Bootstrap context and @RefreshScope).",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-cloud-commons/docs/current/reference/html/",
          },
        },
      },
      {
        id: "cloud-function",
        name: "Function",
        description:
          "Promotes the implementation of business logic via functions and supports a uniform programming model across serverless providers, as well as the ability to run standalone (locally or in a PaaS).",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-cloud-function/docs/current/reference/html/spring-cloud-function.html",
          },
          sample: {
            href: "https://github.com/spring-cloud/spring-cloud-function/tree/main/spring-cloud-function-samples",
            title: "Various sample apps using Spring Cloud Function",
          },
        },
      },
      {
        id: "cloud-task",
        name: "Task",
        description:
          "Allows a user to develop and run short lived microservices using Spring Cloud. Run them locally, in the cloud, and on Spring Cloud Data Flow.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-cloud-task/docs/current/reference/html/",
          },
        },
      },
    ],
  },
  {
    name: "Spring Cloud Config",
    values: [
      {
        id: "cloud-config-client",
        name: "Config Client",
        description:
          "Client that connects to a Spring Cloud Config Server to fetch the application's configuration.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-cloud-config/docs/current/reference/html/#_client_side_usage",
            title: "Config Client Quick Start",
          },
        },
      },
      {
        id: "cloud-config-server",
        name: "Config Server",
        description:
          "Central management for configuration via Git, SVN, or HashiCorp Vault.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-cloud-config/docs/current/reference/html/#_spring_cloud_config_server",
          },
          guide: {
            href: "https://spring.io/guides/gs/centralized-configuration/",
            title: "Centralized Configuration",
          },
        },
      },
      {
        id: "cloud-starter-vault-config",
        name: "Vault Configuration",
        description:
          "Provides client-side support for externalized configuration in a distributed system. Using HashiCorp's Vault you have a central place to manage external secret properties for applications across all environments.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-cloud-vault/docs/current/reference/html/#client-side-usage",
            title: "Vault Client Quick Start",
          },
        },
      },
      {
        id: "cloud-starter-zookeeper-config",
        name: "Apache Zookeeper Configuration",
        description:
          "Enable and configure common patterns inside your application and build large distributed systems with Apache Zookeeper based components. The provided patterns include Service Discovery and Configuration.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-cloud-zookeeper/docs/current/reference/html/#distributed-configuration-usage",
            title: "Apache Zookeeper Quick Start",
          },
        },
      },
      {
        id: "cloud-starter-consul-config",
        name: "Consul Configuration",
        description:
          "Enable and configure the common patterns inside your application and build large distributed systems with Hashicorp’s Consul. The patterns provided include Service Discovery, Distributed Configuration and Control Bus.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-cloud-consul/docs/current/reference/html/#distributed-configuration-usage",
            title: "Spring Cloud Consul Quick Start",
          },
        },
      },
    ],
  },
  {
    name: "Spring Cloud Discovery",
    values: [
      {
        id: "cloud-eureka",
        name: "Eureka Discovery Client",
        description:
          "A REST based service for locating services for the purpose of load balancing and failover of middle-tier servers.",
        _links: {
          guide: {
            href: "https://spring.io/guides/gs/service-registration-and-discovery/",
            title:
              "Service Registration and Discovery with Eureka and Spring Cloud",
          },
          reference: {
            href: "https://docs.spring.io/spring-cloud-netflix/docs/current/reference/html/#service-discovery-eureka-clients",
          },
        },
      },
      {
        id: "cloud-eureka-server",
        name: "Eureka Server",
        description: "spring-cloud-netflix Eureka Server.",
        _links: {
          guide: {
            href: "https://spring.io/guides/gs/service-registration-and-discovery/",
            title:
              "Service Registration and Discovery with Eureka and Spring Cloud",
          },
          reference: {
            href: "https://docs.spring.io/spring-cloud-netflix/docs/current/reference/html/#spring-cloud-eureka-server",
          },
        },
      },
      {
        id: "cloud-starter-zookeeper-discovery",
        name: "Apache Zookeeper Discovery",
        description: "Service discovery with Apache Zookeeper.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-cloud-zookeeper/docs/current/reference/html/#spring-cloud-zookeeper-discovery",
          },
        },
      },
      {
        id: "cloud-starter-consul-discovery",
        name: "Consul Discovery",
        description: "Service discovery with Hashicorp Consul.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-cloud-consul/docs/current/reference/html/#spring-cloud-consul-discovery",
          },
        },
      },
    ],
  },
  {
    name: "Spring Cloud Routing",
    values: [
      {
        id: "cloud-gateway",
        name: "Gateway",
        description:
          "Provides a simple, yet effective way to route to APIs in Servlet-based applications. Provides cross-cutting concerns to those APIs such as security, monitoring/metrics, and resiliency.",
        versionRange: "3.2.0.M1",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/",
          },
        },
      },
      {
        id: "cloud-gateway-reactive",
        name: "Reactive Gateway",
        description:
          "Provides a simple, yet effective way to route to APIs in reactive applications. Provides cross-cutting concerns to those APIs such as security, monitoring/metrics, and resiliency.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/",
          },
          guide: {
            href: "https://github.com/spring-cloud-samples/spring-cloud-gateway-sample",
            title: "Using Spring Cloud Gateway",
          },
        },
      },
      {
        id: "cloud-feign",
        name: "OpenFeign",
        description:
          "Declarative REST Client. OpenFeign creates a dynamic implementation of an interface decorated with JAX-RS or Spring MVC annotations.",
        _links: {
          sample: {
            href: "https://github.com/spring-cloud-samples/feign-eureka",
            title: "Declarative REST calls with Spring Cloud OpenFeign sample",
          },
          reference: {
            href: "https://docs.spring.io/spring-cloud-openfeign/docs/current/reference/html/",
          },
        },
      },
      {
        id: "cloud-loadbalancer",
        name: "Cloud LoadBalancer",
        description:
          "Client-side load-balancing with Spring Cloud LoadBalancer.",
        _links: {
          guide: {
            href: "https://spring.io/guides/gs/spring-cloud-loadbalancer/",
            title: "Client-side load-balancing with Spring Cloud LoadBalancer",
          },
          reference: {
            href: "https://docs.spring.io/spring-cloud-commons/docs/current/reference/html/#spring-cloud-loadbalancer",
          },
        },
      },
    ],
  },
  {
    name: "Spring Cloud Circuit Breaker",
    values: [
      {
        id: "cloud-resilience4j",
        name: "Resilience4J",
        description:
          "Spring Cloud Circuit breaker with Resilience4j as the underlying implementation.",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-cloud-circuitbreaker/docs/current/reference/html/#configuring-resilience4j-circuit-breakers",
          },
        },
      },
    ],
  },
  {
    name: "Spring Cloud Messaging",
    values: [
      {
        id: "cloud-bus",
        name: "Cloud Bus",
        description:
          "Links nodes of a distributed system with a lightweight message broker which can used to broadcast state changes or other management instructions (requires a binder, e.g. Apache Kafka or RabbitMQ).",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-cloud-bus/docs/current/reference/html/",
          },
        },
      },
      {
        id: "cloud-stream",
        name: "Cloud Stream",
        description:
          "Framework for building highly scalable event-driven microservices connected with shared messaging systems (requires a binder, e.g. Apache Kafka, Apache Pulsar, RabbitMQ, or Solace PubSub+).",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-cloud-stream/docs/current/reference/html/spring-cloud-stream.html#spring-cloud-stream-overview-introducing",
          },
        },
      },
    ],
  },
  {
    name: "VMware Tanzu Application Service",
    values: [
      {
        id: "scs-config-client",
        name: "Config Client (TAS)",
        description: "Config client on VMware Tanzu Application Service.",
        versionRange: "[3.0.0.RELEASE,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://docs.vmware.com/en/Spring-Cloud-Services-for-VMware-Tanzu/index.html",
          },
        },
      },
      {
        id: "scs-service-registry",
        name: "Service Registry (TAS)",
        description:
          "Eureka service discovery client on VMware Tanzu Application Service.",
        versionRange: "[3.0.0.RELEASE,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://docs.vmware.com/en/Spring-Cloud-Services-for-VMware-Tanzu/index.html",
          },
        },
      },
    ],
  },
  {
    name: "Microsoft Azure",
    values: [
      {
        id: "azure-support",
        name: "Azure Support",
        description:
          "Auto-configuration for Azure Services (Service Bus, Storage, Active Directory, Key Vault, and more).",
        versionRange: "[3.0.0.RELEASE,3.3.0.M1)",
        _links: {
          guide: {
            href: "https://spring.io/guides/gs/spring-boot-for-azure/",
            title: "Deploying a Spring Boot app to Azure",
          },
          reference: {
            href: "https://aka.ms/spring/msdocs/developer-guide",
            title: "Spring Cloud Azure developer guide",
          },
          sample: {
            href: "https://aka.ms/spring/samples",
            title: "Azure Samples",
          },
        },
      },
      {
        id: "azure-active-directory",
        name: "Azure Active Directory",
        description:
          "Spring Security integration with Azure Active Directory for authentication.",
        versionRange: "[3.0.0.RELEASE,3.3.0.M1)",
        _links: {
          guide: {
            href: "https://aka.ms/spring/msdocs/aad",
            title:
              "Securing a Java Web App with the Spring Boot Starter for Azure Active Directory",
          },
          reference: {
            href: "https://microsoft.github.io/spring-cloud-azure/current/reference/html/index.html#spring-security-with-azure-active-directory",
          },
          sample: {
            href: "https://aka.ms/spring/samples/latest/aad",
            title: "Azure Active Directory Sample",
          },
        },
      },
      {
        id: "azure-cosmos-db",
        name: "Azure Cosmos DB",
        description:
          "Fully managed NoSQL database service for modern app development, including Spring Data support.",
        versionRange: "[3.0.0.RELEASE,3.3.0.M1)",
        _links: {
          guide: {
            href: "https://aka.ms/spring/msdocs/cosmos",
            title:
              "How to use Spring Boot Starter with Azure Cosmos DB SQL API",
          },
          reference: {
            href: "https://microsoft.github.io/spring-cloud-azure/current/reference/html/index.html#spring-data-support",
          },
          sample: {
            href: "https://aka.ms/spring/samples/latest/cosmos",
            title: "Azure Cosmos DB Sample",
          },
        },
      },
      {
        id: "azure-keyvault",
        name: "Azure Key Vault",
        description:
          "All key vault features are supported, e.g. manage application secrets and certificates.",
        versionRange: "[3.0.0.RELEASE,3.3.0.M1)",
        _links: {
          guide: [
            {
              href: "https://aka.ms/spring/msdocs/keyvault",
              title:
                "Read Secrets from Azure Key Vault in a Spring Boot Application",
            },
            {
              href: "https://aka.ms/spring/msdocs/keyvault/certificates",
              title:
                "Securing Spring Boot Applications with Azure Key Vault Certificates",
            },
          ],
          reference: {
            href: "https://microsoft.github.io/spring-cloud-azure/current/reference/html/index.html#secret-management",
          },
          sample: {
            href: "https://aka.ms/spring/samples/latest/keyvault",
            title: "Azure Key Vault Sample",
          },
        },
      },
      {
        id: "azure-storage",
        name: "Azure Storage",
        description:
          "All Storage features are supported, e.g. blob, fileshare and queue.",
        versionRange: "[3.0.0.RELEASE,3.3.0.M1)",
        _links: {
          guide: {
            href: "https://aka.ms/spring/msdocs/storage",
            title: "How to use the Spring Boot starter for Azure Storage",
          },
          reference: {
            href: "https://microsoft.github.io/spring-cloud-azure/current/reference/html/index.html#resource-handling",
          },
          sample: {
            href: "https://aka.ms/spring/samples/latest/storage",
            title: "Azure Storage Sample",
          },
        },
      },
    ],
  },
  {
    name: "Google Cloud",
    values: [
      {
        id: "cloud-gcp",
        name: "Google Cloud Support",
        description:
          "Contains auto-configuration support for every Google Cloud integration. Most of the auto-configuration code is only enabled if other dependencies are added to the classpath.",
        versionRange: "[3.0.0.RELEASE,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://googlecloudplatform.github.io/spring-cloud-gcp/reference/html/index.html",
          },
          guide: {
            href: "https://github.com/GoogleCloudPlatform/spring-cloud-gcp/tree/main/spring-cloud-gcp-samples",
            title: "Google Cloud Samples",
          },
        },
      },
      {
        id: "cloud-gcp-pubsub",
        name: "Google Cloud Messaging",
        description:
          "Adds the Google Cloud Support entry and all the required dependencies so that the Google Cloud Pub/Sub integration work out of the box.",
        versionRange: "[3.0.0.RELEASE,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://googlecloudplatform.github.io/spring-cloud-gcp/reference/html/index.html#cloud-pubsub",
          },
          guide: {
            href: "https://github.com/GoogleCloudPlatform/spring-cloud-gcp/tree/main/spring-cloud-gcp-samples/spring-cloud-gcp-pubsub-sample",
            title: "Google Cloud Pub/Sub Sample",
          },
        },
      },
      {
        id: "cloud-gcp-storage",
        name: "Google Cloud Storage",
        description:
          "Adds the Google Cloud Support entry and all the required dependencies so that the Google Cloud Storage integration work out of the box.",
        versionRange: "[3.0.0.RELEASE,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://googlecloudplatform.github.io/spring-cloud-gcp/reference/html/index.html#cloud-storage",
          },
          guide: {
            href: "https://github.com/GoogleCloudPlatform/spring-cloud-gcp/tree/main/spring-cloud-gcp-samples/spring-cloud-gcp-storage-resource-sample",
          },
        },
      },
    ],
  },
  {
    name: "AI",
    values: [
      {
        id: "spring-ai-azure-openai",
        name: "Azure OpenAI",
        description:
          "Spring AI support for Azure’s OpenAI offering, powered by ChatGPT. It extends beyond traditional OpenAI capabilities, delivering AI-driven text generation with enhanced functionality.",
        versionRange: "[3.2.0.M1,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-ai/reference/api/clients/azure-openai-chat.html",
          },
        },
      },
      {
        id: "spring-ai-vectordb-azure",
        name: "Azure AI Search",
        description:
          "Spring AI vector database support for Azure AI Search. It is an AI-powered information retrieval platform and part of Microsoft’s larger AI platform. Among other features, it allows users to query information using vector-based storage and retrieval.",
        versionRange: "[3.2.0.M1,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-ai/reference/api/vectordbs/azure.html",
          },
        },
      },
      {
        id: "spring-ai-bedrock",
        name: "Amazon Bedrock",
        description:
          "Spring AI support for Amazon Bedrock. It is a managed service that provides foundation models from various AI providers, available through a unified API.",
        versionRange: "[3.2.0.M1,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-ai/reference/api/bedrock-chat.html",
          },
        },
      },
      {
        id: "spring-ai-vectordb-chroma",
        name: "Chroma Vector Database",
        description:
          "Spring AI vector database support for Chroma. It is an open-source embedding database and gives you the tools to store document embeddings, content, and metadata. It also allows to search through those embeddings, including metadata filtering.",
        versionRange: "[3.2.0.M1,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-ai/reference/api/vectordbs/chroma.html",
          },
        },
      },
      {
        id: "spring-ai-vectordb-milvus",
        name: "Milvus Vector Database",
        description:
          "Spring AI vector database support for Milvus. It is an open-source vector database that has garnered significant attention in the fields of data science and machine learning. One of its standout features lies in its robust support for vector indexing and querying.",
        versionRange: "[3.2.0.M1,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-ai/reference/api/vectordbs/milvus.html",
          },
        },
      },
      {
        id: "spring-ai-mistral",
        name: "Mistral AI",
        description:
          "Spring AI support for Mistral AI, the open and portable generative AI for devs and businesses.",
        versionRange: "[3.2.0.M1,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-ai/reference/api/clients/mistralai-chat.html",
          },
        },
      },
      {
        id: "spring-ai-vectordb-neo4j",
        name: "Neo4J Vector Database",
        description:
          "Spring AI vector database support for Neo4j's Vector Search. It allows users to query vector embeddings from large datasets.",
        versionRange: "[3.2.0.M1,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-ai/reference/api/vectordbs/neo4j.html",
          },
        },
      },
      {
        id: "spring-ai-ollama",
        name: "Ollama",
        description:
          "Spring AI support for Ollama. It allows you to run various Large Language Models (LLMs) locally and generate text from them.",
        versionRange: "[3.2.0.M1,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-ai/reference/api/clients/ollama-chat.html",
          },
        },
      },
      {
        id: "spring-ai-openai",
        name: "OpenAI",
        description:
          "Spring AI support for ChatGPT, the AI language model and DALL-E, the Image generation model from OpenAI.",
        versionRange: "[3.2.0.M1,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-ai/reference/api/clients/openai-chat.html",
          },
        },
      },
      {
        id: "spring-ai-vectordb-pgvector",
        name: "PGvector Vector Database",
        description:
          "Spring AI vector database support for PGvector. It is an open-source extension for PostgreSQL that enables storing and searching over machine learning-generated embeddings.",
        versionRange: "[3.2.0.M1,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-ai/reference/api/vectordbs/pgvector.html",
          },
        },
      },
      {
        id: "spring-ai-vectordb-pinecone",
        name: "Pinecone Vector Database",
        description:
          "Spring AI vector database support for Pinecone. It is a popular cloud-based vector database and allows you to store and search vectors efficiently.",
        versionRange: "[3.2.0.M1,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-ai/reference/api/vectordbs/pinecone.html",
          },
        },
      },
      {
        id: "spring-ai-postgresml",
        name: "PostgresML",
        description:
          "Spring AI support for the PostgresML text embeddings models.",
        versionRange: "[3.2.0.M1,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-ai/reference/api/embeddings/postgresml-embeddings.html",
          },
        },
      },
      {
        id: "spring-ai-vectordb-redis",
        name: "Redis Search and Query Vector Database",
        description:
          "Spring AI vector database support for Redis Search and Query.It extends the core features of Redis OSS and allows you to use Redis as a vector database.",
        versionRange: "[3.2.0.M1,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-ai/reference/api/vectordbs/redis.html",
          },
        },
      },
      {
        id: "spring-ai-stabilityai",
        name: "Stability AI",
        description:
          "Spring AI support for Stability AI's text to image generation model.",
        versionRange: "[3.2.0.M1,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-ai/reference/api/clients/image/stabilityai-image.html",
          },
        },
      },
      {
        id: "spring-ai-transformers",
        name: "Transformers (ONNX) Embeddings",
        description:
          "Spring AI support for pre-trained transformer models, serialized into the Open Neural Network Exchange (ONNX) format.",
        versionRange: "[3.2.0.M1,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-ai/reference/api/embeddings/onnx.html",
          },
        },
      },
      {
        id: "spring-ai-vertexai-palm2",
        name: "Vertex AI PaLM2",
        description:
          "Spring AI support for Google Vertex PaLM2 chat and embedding models.",
        versionRange: "[3.2.0.M1,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-ai/reference/api/clients/vertexai-palm2-chat.html",
          },
        },
      },
      {
        id: "spring-ai-vertexai-gemini",
        name: "Vertex AI Gemini",
        description: "Spring AI support for Google Vertex Gemini chat.",
        versionRange: "[3.2.0.M1,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-ai/reference/api/clients/vertexai-gemini-chat.html",
          },
        },
      },
      {
        id: "spring-ai-vectordb-qdrant",
        name: "Qdrant Vector Database",
        description:
          "Spring AI vector database support for Qdrant. It is an open-source, high-performance vector search engine/database.",
        versionRange: "[3.2.0.M1,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-ai/reference/api/vectordbs/qdrant.html",
          },
        },
      },
      {
        id: "spring-ai-vectordb-weaviate",
        name: "Weaviate Vector Database",
        description:
          "Spring AI vector database support for Weaviate, an open-source vector database. It allows you to store data objects and vector embeddings from your favorite ML-models and scale seamlessly into billions of data objects.",
        versionRange: "[3.2.0.M1,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://docs.spring.io/spring-ai/reference/api/vectordbs/weaviate.html",
          },
        },
      },
      {
        id: "timefold-solver",
        name: "Timefold Solver",
        description: "AI solver to optimize operations and scheduling.",
        versionRange: "[2.6.0.RELEASE,3.3.0.M1)",
        _links: {
          reference: {
            href: "https://timefold.ai/docs/timefold-solver/latest/quickstart/spring-boot/spring-boot-quickstart#springBootJavaQuickStart",
          },
          sample: {
            href: "https://github.com/TimefoldAI/timefold-quickstarts/tree/stable/technology/java-spring-boot",
            title:
              "Timetabling sample. Assign lessons to timeslots and rooms to produce a better schedule for teachers and students",
          },
        },
      },
    ],
  },
];

export default dependencyList;
