### In ColorScreen.js:

item returns something like {item: { rgb(0, 0, 0)}, index: 0}This is the reason in some cases we need destructuring and some other cases we don't.

Like when we need the prop of the FlatList, renderItem; in this case we need destructuring because we only need the color, not the index of the element.

```
    renderItem={({ item }) => {
        return (
        <View style={{ height: 100, width: 100, backgroundColor: item }} />
        );
    }}
```

And in the KeyExtractor prop, we get the entire item, as it has to be unique
```
    keyExtractor={item => item}
```

