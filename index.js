import { appendFile, unlink, readFile, writeFile } from 'node:fs';

writeFile('employees.json', '{"name":"Employee 1 Name", "salary":"2000"}', 'utf-8', (err) => {
    if (err) throw err;
    console.log("Json uzantili dosyaya veri yazıldı");
})
readFile('employees.json', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data, "\nJson uzantili dosya basarili bir sekilde okundu");
})
appendFile('emplooyes.json', '{"name":"Employee 2 Name", "salary":"2000"}', 'utf-8', (err) => {
    if (err) throw err;
    console.log('Json uzantili dosyaya veri basarili bir sekilde eklendi');
})
unlink('employees.json', (err) => {
    if (err) throw err;
    console.log('Json uzantili dosya basarili bir sekilde silindi');
})
