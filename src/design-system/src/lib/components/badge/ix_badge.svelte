<script lang="ts">
	import { BadgeVariant } from "./badge__variant.ts";

    let { label, icon= '', variant = BadgeVariant.Neutral } = $props();
</script>

<div class="component__container badge__container badge badge--{variant}">
    <i class="badge__icon {icon}"></i>
    <span>{label}</span>
</div>