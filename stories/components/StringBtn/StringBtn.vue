<script>
import {h} from "vue";

export default {
  name: "StringBtn",
  setup(props, ctx) {
    return () => h(props.as,props,  ctx)
  },
  props: {
    as:{
      type: String,
      validator:(value) => ['button', 'a'].includes(value),
      default: () => 'button'
    }
  }
}
</script>
