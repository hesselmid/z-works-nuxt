<template>
  <div style="padding:56.25% 0 0 0;position:relative;">
    <lite-vimeo
      :videoid="id"
      videotitle="Z-Works video"
      style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:15px;"
    ></lite-vimeo>
  </div>
</template>

<script>
export default {
  props: ["id"],
};
</script>
