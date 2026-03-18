declare module 'tailwindcss/plugin' {
  type PluginAPI = {
    addComponents: (components: Record<string, unknown> | Record<string, unknown>[]) => void;
  };
  function plugin(handler: (api: PluginAPI) => void): unknown;
  export default plugin;
}
