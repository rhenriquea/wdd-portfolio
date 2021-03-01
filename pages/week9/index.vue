<template>
  <div>
    <h1>HTML 5 APIs</h1>
    <small> The notes this week is based on short demonstrations of HTML5 API's </small>

    <h2>API's List</h2>
    <dl>
      <dt>Battery status</dt>
      <dd>Checks the battery status of a device</dd>
      <dt>Clipboard</dt>
      <dd>Copy content to the operating system’s clipboard</dd>

      <dt>Drag and drop</dt>
      <dd>Add drag and drop items around our apps</dd>

      <dt>Fetch</dt>
      <dd>Make HTTP requests more easily than with XMLHttpRequest</dd>

      <dt>File</dt>
      <dd>Access files securely on the user’s computer</dd>

      <dt>Forms</dt>
      <dd>
        Added new types that we can use for form validation and render form fields differently
      </dd>

      <dt>Geolocation</dt>
      <dd>Locate the device’s location</dd>

      <dt>getUserMedia/Stream</dt>
      <dd>Retrieve audio and video from an external device like a camera</dd>

      <dt>Indexed database</dt>
      <dd>Store database data locally</dd>

      <dt>Internalization</dt>
      <dd>Provides international formatting and string comparison features</dd>

      <dt>Screen orientation</dt>
      <dd>Check the screen orientation of a device</dd>

      <dt>Selection</dt>
      <dd>Select elements using CSS selectors</dd>

      <dt>Server sent events</dt>
      <dd>Allows servers to push data to clients without requesting it on the client side</dd>

      <dt>User timing</dt>
      <dd>Get more precise timestamps to measure performance of our applications</dd>

      <dt>Vibration</dt>
      <dd>Make devices vibrate if it has this capability</dd>

      <dt>Web audio</dt>
      <dd>Process audio on the client side</dd>

      <dt>Web speech</dt>
      <dd>Add text to speech features into our web apps</dd>

      <dt>Web sockets</dt>
      <dd>Make real time communication between client and server</dd>

      <dt>Web workers</dt>
      <dd>Run tasks in the background in user browsers</dd>
    </dl>

    <h2>Practical Examples</h2>
    <h3>Geolocation API</h3>
    <p>
      The Geolocation API allows us to get the physical location of a device when given permission
      by the user. It is a well-supported API implemented in more than 90% of desktop and mobile
      browsers.
    </p>

    <div class="example">
      <button class="example__button" @click="locateUser">Locate Me</button>
      <br />
      <small>You may be prompted to allow your browser to use the location.</small>
      <div class="example__loader" v-show="loading"></div>
    </div>
    <div id="map" class="example__map" v-show="!loading"></div>

    <h3>Audio Playback Example</h3>
    <p>
      With HTML5, we can get audio and video from devices that we attached to our computers or
      cameras built into portable devices without any plugins. The WebRTC API is the way to do this.
      WebRTC stands for Web Real Time Communications. If your browser supports WebRTC, we should get
      a navigatior.getUserMedia() method, which gets the audio and video from the user’s device.
    </p>
    <span class="audio-action">
      <button class="audio-action--play" @click="audio('play')">&#9658; Play</button>
      <button class="audio-action--stop" @click="audio('pause')">&#9724; Stop</button>
    </span>
    <audio ref="audio"></audio>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import { Map, View, Feature } from 'ol';
import { fromLonLat } from 'ol/proj';
import { Tile, Vector as VectorLayer } from 'ol/layer';
import { Style, Icon } from 'ol/style';
import { OSM, Vector as VectorSource } from 'ol/source';
import Point from 'ol/geom/Point';

export default {
  head: () => ({
    link: [
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.5.0/css/ol.css',
      },
    ],
    script: [
      {
        src:
          'https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.5.0/build/ol.js',
      },
    ],
  }),
  data: () => ({
    map: null,
    markers: null,
    loading: false,
  }),
  mounted() {
    this.init();
  },
  methods: {
    locateUser() {
      this.loading = true;

      window.navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        const coordinates = [longitude, latitude];

        const view = new View({
          center: fromLonLat(coordinates),
          zoom: 18,
        });

        this.map.setView(view);

        const marker = new Feature(new Point(fromLonLat(coordinates)));

        this.markers.getSource().addFeature(marker);

        this.loading = false;
      });
    },
    audio(action) {
      const { audio } = this.$refs;
      const config = { video: false, audio: true };
      const callback = stream => {
        audio.srcObject = stream;
        audio[action]();
      };

      window.navigator.getUserMedia(config, callback, err => {});
    },
    init() {
      const BYUICoordinates = [-111.78349495607233, 43.81441554287644];

      // Map Configuration
      this.map = new Map({
        target: 'map',
        layers: [new Tile({ source: new OSM() })],
        view: new View({
          center: fromLonLat(BYUICoordinates),
          zoom: 15,
        }),
      });

      // Layer Configuration
      this.markers = new VectorLayer({
        source: new VectorSource(),
        style: new Style({
          image: new Icon({
            anchor: [0.5, 1],
            scale: 0.2,
            src: 'https://cdn.iconscout.com/icon/free/png-256/pin-2353294-1960008.png',
          }),
        }),
      });

      this.map.addLayer(this.markers);
    },
  },
};
</script>

<style lang="scss" scoped>
.example {
  &__button {
    background-color: #dc143c;
    border: 1px solid #dc143c;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 15px;
    padding: 10px 15px;
  }

  &__map {
    height: 400px;
    margin: 20px 0;
    width: 100%;
  }

  &__loader {
    animation: spin 2s linear infinite;
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    height: 80px;
    margin: 0 auto;
    width: 80px;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.audio-action {
  button {
    border: 0;
    line-height: 1em;
    padding: 10px 15px;
  }

  &--play {
    background-color: $orange;
  }
  &--stop {
    background-color: $red;
  }
}

dl {
  border: 1px solid;
  border-radius: 5px;
  padding: 15px;
  dt {
    float: left;
    font-weight: bold;
    margin-right: 10%;
    max-width: 40%;
  }

  dd {
    color: #808080;
    margin-bottom: 0.5em;
    margin-left: 50%;
  }

  dd::after {
    clear: left;
    content: ' ';
    display: block;
  }

  dt,
  dd {
    padding: 5px;
  }
}
</style>
