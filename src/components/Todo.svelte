<script lang="ts">
  import Item from "./Item.svelte";
  import { db } from "../firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs";
	import { collection, where, query, orderBy, addDoc, doc, updateDoc, deleteDoc, getDocs} from "firebase/firestore";
  export let uid:number;
  let text = 'Example Task'
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
<style>
  input {display: block;}
</style>
<main>
  <ul>
    {#each $todos as todo}
      <Item id={todo.id} textContent={todo.text} complete={todo.complete} on:remove={deleteTodo} on:toggle={update}
      />
      {/each}
  </ul>
  <input bind:value={text}>

<button on:click={addTodo}>Add Task</button>
</main>