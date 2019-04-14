import api from '@/api'
const SectionMixin = {
  props: {
    evalId: {
      required: true,
      type: Number
    },
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
    section (newData) {
      this.d = newData
    }
  },
  methods: {
    submit() {
      api.evaluations.updateSection(this.evalId, this.name, this.d)
    }
  },
  mounted () {
    this.d = this.section
  }
}

export default SectionMixin
