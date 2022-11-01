-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `email` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `price` FLOAT NOT NULL,
    `categories_id` INTEGER NOT NULL,

    INDEX `categories_id`(`categories_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `staff` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `roles_id` INTEGER NOT NULL,
    `store_id` INTEGER NOT NULL,

    INDEX `roles_id`(`roles_id`),
    INDEX `store_id`(`store_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `city` VARCHAR(50) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stocks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantity` INTEGER NOT NULL,
    `store_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,

    INDEX `product_id`(`product_id`),
    INDEX `store_id`(`store_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_products` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantity` INTEGER NOT NULL,
    `total` FLOAT NOT NULL,
    `order_id` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,

    INDEX `order_id`(`order_id`),
    INDEX `product_id`(`product_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` BIT(1) NOT NULL,
    `store_id` INTEGER NOT NULL,
    `staff_id` INTEGER NOT NULL,
    `customer_id` INTEGER NOT NULL,

    INDEX `customer_id`(`customer_id`),
    INDEX `staff_id`(`staff_id`),
    INDEX `store_id`(`store_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categories_id`) REFERENCES `categories`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `staff` ADD CONSTRAINT `staff_ibfk_1` FOREIGN KEY (`roles_id`) REFERENCES `roles`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `staff` ADD CONSTRAINT `staff_ibfk_2` FOREIGN KEY (`store_id`) REFERENCES `stores`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `stocks` ADD CONSTRAINT `stocks_ibfk_1` FOREIGN KEY (`store_id`) REFERENCES `stores`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `stocks` ADD CONSTRAINT `stocks_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `order_products` ADD CONSTRAINT `order_products_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `order_products` ADD CONSTRAINT `order_products_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`store_id`) REFERENCES `stores`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`staff_id`) REFERENCES `staff`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
