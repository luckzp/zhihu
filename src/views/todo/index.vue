<template>
    <a-col :span="12" :offset="6">
        <h1 class="title">我的todo</h1>

        <a-input-search v-model:value="addTitle" placeholder="input search text" enter-button="Search" size="large"
            @search="onSearch" />
        <a-table :dataSource="dataSource" :columns="columns" :pagination="false">
            <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'operation'">
                    <a @click="onEdit(record.key)">编辑</a>
                    <a-divider type="vertical" />

                    <a @click="onDelete(record.key)">delete</a>
                </template>
            </template>
        </a-table>
        <a-modal v-model:open="open" title="编辑" centered :maskClosable="false" @cancel="cancel">
            <a-input v-model:value="title" placeholder="Basic usage" />
            <template #footer>
                <a-button key="submit" type="primary" @click="onUpdateName()">确定</a-button>

            </template>
        </a-modal>
    </a-col>
</template>

<script setup lang="ts">
import { ref } from "@vue/runtime-core";
const open = ref<boolean>(false);
const title = ref<string>('');
const addTitle = ref<string>('');
const currentKey = ref<string>('');
const dataSource = ref([
    {
        key: '1',
        name: '胡彦斌'
    },
    {
        key: '2',
        name: '胡彦祖'
    },
    {
        key: '3',
        name: '胡彦祖3'
    }
])

const columns = [
    {
        title: '待办事项',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        fixed: 'right',
        width: 180,
    }
]
const onDelete = (key: string) => {
    dataSource.value = dataSource.value.filter(item => item.key !== key);
};
const onEdit = (key) => {
    currentKey.value = key;
    open.value = true;
};
const onSearch = (addTitle: string) => {
    dataSource.value.push({ key: dataSource.value.length + 1, name: addTitle })
};
const onUpdateName = () => {
    console.log(currentKey.value)
    open.value = false;
    // 使用 findIndex 方法找到对象在数组中的索引
    var foundIndex = dataSource.value.findIndex(item => item.key === currentKey.value);
    console.log(foundIndex)
    // 根据索引更新数组中的对象
    dataSource.value[foundIndex].name = title.value;
    title.value = '';
};
const cancel = () => {
    open.value = false;
};
</script>
<style>
.title {
    text-align: center;
}
</style>
