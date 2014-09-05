<?php
/**
 * 产品显示Toolbar
 * 
 * @category   Yebihai 
 * @package    Yebihai_Bestsellers
 * @author     叶必海       http://www.yebihai.com/
 */
class Yebihai_Bestsellers_Block_List_Toolbar extends Mage_Catalog_Block_Product_List_Toolbar 
{
    protected function _construct()
    {
        parent::_construct();
        $this->setTemplate('bestsellers/list/toolbar.phtml');
    }

    public function getCurrentMode()
    {
        $mode = $this->getParentBlock()->getDisplayMode();
        if ($mode) {
            return $mode;
        } else {
            return Mage::getStoreConfig('bestsellers/bestsellers/list_mode');
        }
    }

    public function getLimit()
    {
        return intval(Mage::getStoreConfig('bestsellers/bestsellers/num_displayed_products'));
    }
}
