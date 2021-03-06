import _ServerApp from './ServerApp.svelte';

type ServerSideComponent = {
  render: (props?: Record<string, unknown>) => {
    html: string,
    head: string,
    css: {
      code: string,
      map: string
    }
  }
};

export * from './Router';
export { default as Router } from './Router';
export { default as ClientApp } from './ClientApp.svelte';
export { default as RouterView } from './RouterView.svelte';
export { default as RouterLink } from './RouterLink.svelte';
export const ServerApp = <unknown>_ServerApp as ServerSideComponent;
