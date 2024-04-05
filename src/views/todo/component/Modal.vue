<template>


    <a-modal v-model:open="$props.open" title="编辑" centered :maskClosable="false" @cancel="$emit('updateOpen', name)">
        <a-input v-model:value="name" placeholder="Basic usage" />
        <template #footer>
            <a-button key="submit" type="primary" @click="$emit('updateOpen', name)">确定</a-button>

        </template>
    </a-modal>

</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'

const name = ref<string>('');
defineProps<{
    open: boolean
}>()
const emit = defineEmits<{
    (e: 'updateOpen', name: string): void
}>()

const updateName = (extendName: string) => {
    name.value = extendName;

}
defineExpose({ updateName })
</script>
