<template>
  <p></p>
</template>

<script>
export default {
  name: 'IndexComponent',
  data() {
    return {
      props: {
        id: {
          type: Number,
          required: true,
        },
        text: {
          type: String,
          required: true,
        },
      },
    };
  },
};
</script>
