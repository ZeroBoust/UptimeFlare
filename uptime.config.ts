import { PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: 'jmrdez fleet status',
  links: [{ link: 'https://status.jmrdez.com', label: 'Status', highlight: true }],
}

const workerConfig: WorkerConfig = {
  monitors: [
    // one public leg per node — an external witness, not a Kuma duplicate
    { id: 'cal',   name: 'Radicale (pi-home)',   method: 'GET', target: 'https://cal.jmrdez.com',   expectedCodes: [200, 403], timeout: 15000 },
    { id: 'vault', name: 'Vaultwarden (pi-home)', method: 'GET', target: 'https://vault.jmrdez.com', expectedCodes: [200, 403], timeout: 15000 },
    { id: 'sso',   name: 'Pocket-ID (pi-home)',  method: 'GET', target: 'https://sso.jmrdez.com',   expectedCodes: [200, 403], timeout: 15000 },
    { id: '2fa',   name: '2FAuth (vps-apps)',    method: 'GET', target: 'https://2fa.jmrdez.com',   expectedCodes: [200, 403], timeout: 15000 },
    { id: 'cloud', name: 'OpenCloud (vps-apps)', method: 'GET', target: 'https://cloud.jmrdez.com', expectedCodes: [200, 403], timeout: 15000 },
    { id: 'agents',name: 'Hermes WebUI (vps-apps)', method: 'GET', target: 'https://agents.jmrdez.com', expectedCodes: [200, 403], timeout: 15000 },
    { id: 'ssh',   name: 'SSH route',            method: 'GET', target: 'https://ssh.jmrdez.com',   expectedCodes: [200, 403], timeout: 15000 },
  ],
  notification: {
    webhook: {
      url: 'https://discord.com/api/webhooks/YOUR_WEBHOOK_HERE',
      method: 'POST',
      payloadType: 'json',
      payload: { content: '$MSG' },
      timeout: 10000,
    },
    timeZone: 'Europe/Madrid',
    gracePeriod: 5,
  },
}

const maintenances: MaintenanceConfig[] = []
export { maintenances, pageConfig, workerConfig }
