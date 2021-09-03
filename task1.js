let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
styles.shift("Джаз");
styles.unshift("Регги");
styles.unshift("Рэп"); 
for(let style of styles){
    console.log(style);
}