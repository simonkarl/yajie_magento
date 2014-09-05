<?php
/**
 * 促销显示模式配置
 * 
 * @category   Yebihai 
 * @package    Yebihai_Bestsellers
 * @author     叶必海       http://www.yebihai.com/
 */
class Yebihai_Bestsellers_Model_Config_Source_ListMode
{
    public function toOptionArray()
    {
        return array(
            array('value'=>'grid', 'label'=>Mage::helper('adminhtml')->__('Grid')),
            array('value'=>'list', 'label'=>Mage::helper('adminhtml')->__('List')),
        );
    }
}
