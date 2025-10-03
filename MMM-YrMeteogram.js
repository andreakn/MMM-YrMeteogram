Module.register("MMM-YrMeteogram", {
  defaults: {
    yrMeteogramUrl: "https://www.yr.no/nb/innhold/%s/meteogram.svg",
    updateInterval: 10000,
  },

  start: function () {
    this.list = null;
    this.loaded = false;
    var self = this;
    this.config.yrMeteogramUrl = this.config.yrMeteogramUrl.replace(
      "%s",
      this.config.locationId
    );
    console.log("start" + this.name);

    setInterval(function () {
      self.updateDom(1000);
    }, 60000);
  },

  getDom: function () {
    console.log("Getting DOM for: " + this.name);
    var wrapper = document.createElement("div");
    var img = document.createElement("img");
    img.src = this.config.yrMeteogramUrl + "?v=" + new Date().getTime();
    img.style = `height: ${this.config.height}; width: ${this.config.width}; filter:invert(100%);`;
    wrapper.appendChild(img);
    return wrapper;
  },
});
