// *STEP 1 MAKE SEEDS WORK* (DON'T NEED TO MAKE THE ROUTES 1ST IF THE SEEDS WORK LIKE THEY SHOULD THEN MAKE DIFFERENT ROUTES AND POPULATE IT WITH THE CORRECT METHODS)
// MAKE MODELS (Database Models located in READme)
    // Product 
        // Foreign key | category_id | references | Category
    // ProductTag
        // Foreign key | product_id | references | Product
        // Foreign key | tag_id | references
    // Category 
    // Tag

// Relationships
    // Product to Category is 1:many
        // belongsTo
        // hasMany
    // Product to Tag is many:many
        // belongsToMany
        // through ProductTag (similart to through model in mini project in index.js)

// If the above is done properly, seeds work

// ROUTES