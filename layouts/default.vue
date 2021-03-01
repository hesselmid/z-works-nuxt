<template>
  <div>
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML =
      '(function(l,e,a,d,i,n,f,o){if(!l[i]){l.GlobalLeadinfoNamespace=l.GlobalLeadinfoNamespace||[]; l.GlobalLeadinfoNamespace.push(i);l[i]=function(){(l[i].q=l[i].q||[]).push(arguments)};l[i].t=l[i].t||n; l[i].q=l[i].q||[];o=e.createElement(a);f=e.getElementsByTagName(a)[0];o.async=1;o.src=d;f.parentNode.insertBefore(o,f);} }(window,document,"script","https://cdn.leadinfo.net/ping.js","leadinfo","LI-6038FD7646E63"));';
    document.head.appendChild(script);
  },
};
</script>
