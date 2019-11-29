<script>
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import { center, zoom } from './store';

  import { fromLonLat, toLonLat } from 'ol/proj';
  import {
    createMap,
    createOSMSource,
    createTileLayer,
    createView,
  } from './openlayers';

  // [13.6044524, 52.7510394]

  let map;

  /**
   * @type {HTMLElement}
   */
  let mapContainer;

  onMount(() => {
    map = createMap({
      layers: [
        createTileLayer({
          source: createOSMSource({}),
        }),
      ],
      view: createView({
        center: fromLonLat(get(center)),
        zoom: get(zoom),
      }),
      target: mapContainer,
    });

    map.on('moveend', event => {
      const c = event.map.getView().getCenter();

      center.set(toLonLat(c));
    });

    return () => console.log('unmounted map'); // TODO cleanup map
  });
</script>

<style global>
  @import 'ol/ol.css';
</style>

<div class="w-screen h-screen" bind:this={mapContainer} />
