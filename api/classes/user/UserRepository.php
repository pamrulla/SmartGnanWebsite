<?php
require_once '../../DBClass.php';
require_once 'UserRegistration.php';
require_once 'UserDetails.php';

class UserRepository{
	public static function postUserRegistration($email, $password){
		$sql = 'select * from user where email = \'' . $email . '\'';

		$db_result = DBClass::query($sql);
		if(count($db_result) == 0){

			$cost = 10;

			$salt = strtr(base64_encode(mcrypt_create_iv(16, MCRYPT_DEV_URANDOM)), '+', '.');

			$salt = sprintf("$2a$%02d$", $cost) . $salt;

			$hash = crypt($password, $salt);

            $sql = 'insert into user (email, password, joined_date) values (\''. $email .'\', \''. $hash .'\', \''.date("Y-m-d").'\' )';

            if(DBClass::query_insert($sql) == 1){
            	//Send Mail

            	$sql = 'select id from user where email = \'' . $email . '\'';
            	$db_result = DBClass::query($sql);
            	if(count($db_result) == 1){
            		return new UserRegistration(true, "", $db_result[0]->id);
            	}
            	else{
            		return new UserRegistration(false, "Error on registration, please try again.");
            	}
            }
            else{
            	return new UserRegistration(false, "Error on registration, please try again.");
            }
		}
        else{
        	return new UserRegistration(false, "User with same email exists.");
        }
	}

	public static function loggingInUser($email, $password){
		
		$sql = 'select * from user where email = \'' . $email . '\'';
		$db_result = DBClass::query($sql);
		if(count($db_result) == 1){
			// Hashing the password with its hash as the salt returns the same hash
			if ( hash_equals($db_result[0]->password, crypt($password, $db_result[0]->password)) ) {
  				return new UserDetails($db_result, true);
			}
			else{
				return new UserDetails(null, false, 'Email or Password are not matching.');
			}
		}
		else{
			return new UserDetails(null, false, 'User is exists in our system, please register.');
		}
	}
}