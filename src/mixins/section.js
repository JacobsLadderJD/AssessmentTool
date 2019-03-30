const SectionMixin = {
  props: {
    section: {
      required: true,
      type: Object
    }
  },
  data: () => ({
    name:"",
    d: {}
  }),
  watch: {
    section (newData, oldData) {
      this.d = newData
    }
  },
  methods: {
    submit() {
      this.$emit("update", {
        section: this.name,
        data: this.d
      })
    }
  },
  mounted () {
    this.d = this.section
  }
}

export default SectionMixin
