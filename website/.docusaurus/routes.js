import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/api',
    component: ComponentCreator('/api', 'e8f'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'fd5'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '711'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '7b1'),
            routes: [
              {
                path: '/docs/api/anonymization-logs',
                component: ComponentCreator('/docs/api/anonymization-logs', '691'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/document-processing',
                component: ComponentCreator('/docs/api/document-processing', 'a4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/document-reports',
                component: ComponentCreator('/docs/api/document-reports', '137'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/openapi',
                component: ComponentCreator('/docs/api/openapi', '39f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/api/presidio-integration',
                component: ComponentCreator('/docs/api/presidio-integration', 'd0a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/backend',
                component: ComponentCreator('/docs/features/backend', 'e52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/batch-processing',
                component: ComponentCreator('/docs/features/batch-processing', 'a26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/ci-cd-quality-checks',
                component: ComponentCreator('/docs/features/ci-cd-quality-checks', '9d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/digital-signing',
                component: ComponentCreator('/docs/features/digital-signing', 'e78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/document-classification',
                component: ComponentCreator('/docs/features/document-classification', '8cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/document-comparison',
                component: ComponentCreator('/docs/features/document-comparison', '785'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/document-generation',
                component: ComponentCreator('/docs/features/document-generation', 'c12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/document-reporting',
                component: ComponentCreator('/docs/features/document-reporting', '8d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/document-validation',
                component: ComponentCreator('/docs/features/document-validation', '5d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/entity-management',
                component: ComponentCreator('/docs/features/entity-management', 'abc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/external-integration',
                component: ComponentCreator('/docs/features/external-integration', '0ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/gdpr-anonymization',
                component: ComponentCreator('/docs/features/gdpr-anonymization', '104'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/reports-interface',
                component: ComponentCreator('/docs/features/reports-interface', 'cc4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/text-extraction',
                component: ComponentCreator('/docs/features/text-extraction', '362'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/wcag-compliance',
                component: ComponentCreator('/docs/features/wcag-compliance', '588'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/workflow-automation',
                component: ComponentCreator('/docs/features/workflow-automation', '30b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
