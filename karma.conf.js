module.exports = function (config) {
  config.set({
    reporters: ["progress", "coverage"],
    coverageReporter: {
      dir: "coverage/",
      reporters: [
        { type: "html", subdir: "report-html" },
        { type: "lcov", subdir: "report-lcov" },
      ],
    },
  })
}
