<?php
/**
 * Magento
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/osl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magentocommerce.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade Magento to newer
 * versions in the future. If you wish to customize Magento for your
 * needs please refer to http://www.magentocommerce.com for more information.
 *
 * @category    Mage
 * @package     Mage_Core
 * @copyright   Copyright (c) 2013 Magento Inc. (http://www.magentocommerce.com)
 * @license     http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */


/* @var $installer Mage_Core_Model_Resource_Setup */
$installer = $this;
$installer->startSetup();
/**
 *update core websites
 */
$count = count(Mage::getModel('core/store')->getCollection());
if($count >2){
	$case1 = 4;
	$case2 = 3;
}else{
	$case1 = 1;
	$case2 = 2;
}
$web = array(
    'website_id'        => 1,
    'code'              => 'base',
    'name'              => '默认网站',
    'sort_order'        => 0,
    'default_group_id'  => 1,
    'is_default'        => 1,
);
Mage::getModel('core/website')->setData($web)->save();

/**
 * update core store groups
 */
$store =array(
    'group_id'          => 1,
    'website_id'        => 1,
    'name'              => '默认网店',
    'root_category_id'  => $case2,
    'default_store_id'  => $case1
);
Mage::getModel('core/store_group')->setData($store)->save();

/**
 *update core stores
 */
$count = count(Mage::getModel('core/store')->getCollection());
if($count > 2){
	$view =array(
		array(
			'store_id'      => 1,
			'code'          => 'default',
			'website_id'    => 1,
			'group_id'      => 1,
			'name'          => 'English',
			'sort_order'    => 0,
			'is_active'     => 1
		),
		array(
			'store_id'      => 2,
			'code'          => 'german',
			'website_id'    => 1,
			'group_id'      => 1,
			'name'          => 'German',
			'sort_order'    => 0,
			'is_active'     => 1
		),
		array(
			'store_id'      => 3,
			'code'          => 'french',
			'website_id'    => 1,
			'group_id'      => 1,
			'name'          => 'French',
			'sort_order'    => 0,
			'is_active'     => 1
		),
		array(
			'store_id'      => 4,
			'code'          => 'cn',
			'website_id'    => 1,
			'group_id'      => 1,
			'name'          => '中文',
			'sort_order'    => 0,
			'is_active'     => 1
		)
	);
}else{
	$view =array(
		array(
			'store_id'      => 1,
			'code'          => 'cn',
			'website_id'    => 1,
			'group_id'      => 1,
			'name'          => '中文',
			'sort_order'    => 0,
			'is_active'     => 1
		)
	);
}

foreach($view as $item){
	Mage::getModel('core/store')->setData($item)->save();
}

$installer->endSetup();
	 