<template>
  <header class="doc-header">
    <nav class="nav-panel">
      <h2 class="visually-hidden">Навигация</h2>
      <doc-logo/>
      <control-panel/>
      <nav-list/>
    </nav>
  </header>
</template>

<script setup>
import NavList from "./NavList";
import ControlPanel from "./ControlPanel";
import DocLogo from "./DocLogo";
</script>
