<script lang="ts">
  import Item from "./Item.svelte";
  import { db } from "../firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs";
	import { collection, where, query, orderBy, addDoc, doc, updateDoc, deleteDoc, getDocs} from "firebase/firestore";
  export let uid:number;
  let text = ''
  const queryTodo = query(collection(db, 'todos'), where('uid', '==', uid), orderBy('created'));
  const temp  = getDocs(queryTodo).then((response) => {console.log(response)})
  const todos = collectionData(queryTodo, {idField:'id'}).pipe(startWith([]));
  console.log(todos)
  function addTodo() {
    addDoc(collection(db, 'todos'), { uid, text, complete: false, created: Date.now() })
    text = ''
  }
  function update(e:any){
    const {id, status} = e.detail
    updateDoc(doc(db, 'todos', id),  {
      complete:status
    })
  }
  function deleteTodo(e:any){
    const {id} = e.detail
    deleteDoc(doc(db, 'todos', id))
  }
</script>
<main>
  <div class="container">
    <ul class="todo-list">
      {#each $todos as todo}
        <Item id={todo.id} textContent={todo.text} complete={todo.complete} on:remove={deleteTodo} on:toggle={update}
        />
        {/each}
    </ul>
    <div class="section-input">
      <input class="input" bind:value={text}>
      
      <button class="button" on:click={addTodo}>Add Task</button>
    </div>
  </div>
</main>
<style scoped>
  .todo-list{
    margin-bottom: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .section-input{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .section-input input {
    margin-bottom: 1em;
  }
</style>