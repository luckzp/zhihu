<template>
    <a-col :span="12" :offset="6">
        <h1 class="title">我的todo</h1>

        <a-input-search v-model:value="addTitle" placeholder="input search text" enter-button="Search" size="large"
            @search="onSearch" />
        <a-table :dataSource="dataSource" :columns="columns" :pagination="false">
            <template #bodyCell="{ column, record,index }">
                <template v-if="column.key === 'operation'">
                    <a @click="onEdit(record)">编辑</a>
                    <a-divider type="vertical" />

                    <a @click="onDelete(record.key,index)">delete</a>
                </template>
            </template>
        </a-table>
        <Modal ref="child" @updateOpen="toggleModal" :open = "open">
        </Modal>
    </a-col>
</template>

<script setup lang="ts">
import { ref } from "@vue/runtime-core";
import Modal from "../todo/component/Modal.vue"
const open = ref<boolean>(false);
const addTitle = ref<string>('');
const currentKey = ref<string>('');
    const currentObj = ref();
    const child = ref<InstanceType<typeof Modal>>()
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
const onDelete = (key: string, index: number) => {
    dataSource.value.splice(index,1);
};
const onEdit = (record) => {
    currentObj.value = record;
    open.value = !open.value;
    if(child.value){
        child.value.updateName(record.name);
    }
    
};
const toggleModal = (changeName :string) => {
    console.log(2)
    open.value = !open.value;
    currentObj.value.name = changeName;
};
const onSearch = (addTitle: string) => {
    dataSource.value.push({ key: (dataSource.value.length + 1).toString(), name: addTitle })
};
// const onUpdateName = () => {
//     open.value = false;

//     // 根据索引更新数组中的对象
//     currentObj.value.name = title.value;
//     title.value = '';
// };

</script>
<style>
.title {
    text-align: center;
}
</style>
