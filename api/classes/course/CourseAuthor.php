<?php
class CourseAuthor{
    public $AuthorName;
    public $AuthorImage;
    public $AuthorShortDescription;

    public function __construct($an = '', $ai = '', $asd = ''){
        $this->AuthorName = $an;
        $this->AuthorImage = $ai;
        $this->AuthorShortDescription = $asd;
    }
}